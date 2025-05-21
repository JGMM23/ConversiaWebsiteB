import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

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

  const httpServer = createServer(app);
  return httpServer;
}
