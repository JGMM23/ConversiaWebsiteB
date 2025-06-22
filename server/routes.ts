import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { createHubSpotClient, type DemoFormData } from "./hubspot";

// Contact form schema for demo requests
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.string().min(1, { message: "Please select your location." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against our schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Send to HubSpot
      const hubspotClient = createHubSpotClient();
      
      if (!hubspotClient) {
        return res.status(500).json({
          success: false,
          message: "HubSpot integration not configured. Please contact support."
        });
      }

      const demoFormData: DemoFormData = {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone,
        location: validatedData.location,
        message: validatedData.message
      };
      
      const hubspotResult = await hubspotClient.processDemoRequest(demoFormData);
      console.log(`HubSpot integration successful: Contact ${hubspotResult.contactId}, Ticket ${hubspotResult.ticketId}`);
      
      // Send successful response
      res.status(200).json({ 
        success: true, 
        message: "Thank you! Your demo request has been submitted successfully.",
        contactId: hubspotResult.contactId,
        ticketId: hubspotResult.ticketId
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
  


  const httpServer = createServer(app);
  return httpServer;
}
