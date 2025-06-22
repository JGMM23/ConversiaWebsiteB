import { z } from "zod";

const hubspotContactSchema = z.object({
  properties: z.object({
    email: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    company: z.string(),
    lifecyclestage: z.string().default("lead")
  })
});

const hubspotTicketSchema = z.object({
  properties: z.object({
    subject: z.string(),
    content: z.string(),
    hs_pipeline: z.string().default("0"), // Default pipeline
    hs_pipeline_stage: z.string().default("1"), // New ticket stage
    hs_ticket_priority: z.string().default("MEDIUM"),
    source_type: z.string().default("FORM")
  }),
  associations: z.array(z.object({
    to: z.object({
      id: z.string()
    }),
    types: z.array(z.object({
      associationCategory: z.string().default("HUBSPOT_DEFINED"),
      associationTypeId: z.number().default(26) // Contact to Ticket association
    }))
  })).optional()
});

export interface DemoFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  location: string;
  message: string;
}

export class HubSpotIntegration {
  private apiKey: string;
  private baseUrl = 'https://api.hubapi.com';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async makeRequest(endpoint: string, method: 'GET' | 'POST' | 'PATCH', data?: any) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HubSpot API error: ${response.status} - ${errorText}`);
    }

    return response.json();
  }

  async createOrUpdateContact(formData: DemoFormData): Promise<string> {
    const [firstName, ...lastNameParts] = formData.name.split(' ');
    const lastName = lastNameParts.join(' ') || '';

    const interestMap: Record<string, string> = {
      'vip_program': 'Early Adopter VIP Program',
      'private_chat': 'Private Chat Solution',
      'ai_role_play': 'AI Role Play Training',
      'pre_call_plan': 'Pre-Call Planning Tool',
      'all_platform': 'Complete Conversia Platform'
    };

    const contactData = hubspotContactSchema.parse({
      properties: {
        email: formData.email,
        firstname: firstName,
        lastname: lastName,
        company: formData.company,
        lifecyclestage: "lead"
      }
    });

    try {
      // Try to create new contact
      const contact = await this.makeRequest('/crm/v3/objects/contacts', 'POST', contactData);
      return contact.id;
    } catch (error) {
      // If contact exists, update it
      if (error instanceof Error && error.message.includes('409')) {
        const existingContact = await this.makeRequest(
          `/crm/v3/objects/contacts/${formData.email}?idProperty=email`, 
          'GET'
        );
        
        await this.makeRequest(
          `/crm/v3/objects/contacts/${existingContact.id}`, 
          'PATCH', 
          contactData
        );
        
        return existingContact.id;
      }
      throw error;
    }
  }

  async createTicket(formData: DemoFormData, contactId?: string): Promise<string> {
    const locationMap: Record<string, string> = {
      'united_states': 'United States',
      'canada': 'Canada',
      'other': 'Other'
    };

    const locationDisplay = locationMap[formData.location] || formData.location;
    
    // Create ticket without associations first
    const ticketData = {
      properties: {
        subject: `Demo Request: ${formData.company} - ${locationDisplay}`,
        content: `Demo request from ${formData.name} at ${formData.company}\n\nLocation: ${locationDisplay}\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}\n\nContact Email: ${formData.email}`,
        hs_pipeline: "0",
        hs_pipeline_stage: "1",
        hs_ticket_priority: "MEDIUM",
        source_type: "FORM"
      }
    };

    const ticket = await this.makeRequest('/crm/v3/objects/tickets', 'POST', ticketData);
    
    // Try to create association separately if we have a contact ID
    if (contactId && ticket.id) {
      try {
        await this.makeRequest(`/crm/v3/objects/tickets/${ticket.id}/associations/contacts/${contactId}/26`, 'PUT', {});
      } catch (associationError) {
        console.warn('Failed to associate ticket with contact:', associationError);
        // Continue anyway - ticket was created successfully
      }
    }
    
    return ticket.id;
  }

  async processDemoRequest(formData: DemoFormData): Promise<{ contactId: string; ticketId: string }> {
    try {
      // Create or update contact first
      const contactId = await this.createOrUpdateContact(formData);
      
      // Create ticket and associate with contact
      const ticketId = await this.createTicket(formData, contactId);
      
      return { contactId, ticketId };
    } catch (error) {
      console.error('HubSpot integration error:', error);
      throw new Error('Failed to process demo request in HubSpot');
    }
  }
}

export function createHubSpotClient(): HubSpotIntegration | null {
  const apiKey = process.env.HUBSPOT_API_KEY;
  
  if (!apiKey) {
    console.warn('HUBSPOT_API_KEY not found in environment variables');
    return null;
  }
  
  return new HubSpotIntegration(apiKey);
}