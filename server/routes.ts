import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertSubscriberSchema } from "@shared/schema";

const contactFormSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  interest: z.string(),
  message: z.string().min(10),
  consent: z.boolean()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against our schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real app, you might store this in a database or forward to an email service
      console.log("Contact form submission:", validatedData);
      
      // Send successful response
      res.status(200).json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      // Server error
      res.status(500).json({ 
        success: false, 
        message: "An error occurred processing your request" 
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
