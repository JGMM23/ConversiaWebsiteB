import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertSubscriberSchema, insertContactSchema } from "@shared/schema";
import { createHubSpotClient, type DemoFormData } from "./hubspot";

// Extend our insertContactSchema to include any additional fields needed for the form
const contactFormSchema = insertContactSchema.extend({
  phone: z.string(),
  location: z.string()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against our schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Extract the fields we need for database storage
      const contactData = {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        message: validatedData.message
      };
      
      // Store in database
      const submission = await storage.submitContactForm(contactData);
      
      // Try to send to HubSpot if configured
      const hubspotClient = createHubSpotClient();
      let hubspotResult = null;
      
      if (hubspotClient) {
        try {
          const demoFormData: DemoFormData = {
            name: validatedData.name,
            email: validatedData.email,
            company: validatedData.company,
            phone: validatedData.phone,
            location: validatedData.location,
            message: validatedData.message
          };
          
          hubspotResult = await hubspotClient.processDemoRequest(demoFormData);
          console.log(`HubSpot integration successful: Contact ${hubspotResult.contactId}, Ticket ${hubspotResult.ticketId}`);
        } catch (hubspotError) {
          console.error("HubSpot integration failed:", hubspotError);
          // Continue with success response even if HubSpot fails
        }
      }
      
      // Send successful response
      res.status(200).json({ 
        success: true, 
        message: "Thank you! Your demo request has been submitted successfully.",
        hubspotIntegrated: !!hubspotResult
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        return res.status(400).json({ 
          success: false, 
          message: "Please check your form entries and try again", 
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      
      // Server error
      res.status(500).json({ 
        success: false, 
        message: "An error occurred processing your request. Please try again later." 
      });
    }
  });
  
  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Validate the email
      const { email } = insertSubscriberSchema.parse(req.body);
      
      // Store in database
      const success = await storage.addSubscriber(email);
      
      if (success) {
        // Email was added
        res.status(200).json({ 
          success: true, 
          message: "Subscribed successfully! Thank you for joining our newsletter." 
        });
      } else {
        // Email already exists
        res.status(409).json({ 
          success: false, 
          message: "This email is already subscribed to our newsletter." 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        return res.status(400).json({ 
          success: false, 
          message: "Please enter a valid email address", 
          errors: error.errors 
        });
      }
      
      // Server error
      res.status(500).json({ 
        success: false, 
        message: "An error occurred processing your subscription. Please try again later." 
      });
    }
  });
  
  // List subscribers endpoint (typically would be protected but added for demonstration)
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getSubscribers();
      res.status(200).json({ 
        success: true, 
        count: subscribers.length,
        subscribers 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "An error occurred retrieving subscribers" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
