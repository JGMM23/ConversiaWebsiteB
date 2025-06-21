# HubSpot Integration Setup Guide

## Overview
Your "Get a Demo" form is now integrated with HubSpot to automatically create contacts and support tickets when users submit demo requests.

## What Gets Created in HubSpot

### 1. Contact Record
- **Email**: Primary identifier
- **Name**: Split into first/last name
- **Company**: Company name
- **Interest Area**: Selected demo interest
- **Message**: User's message
- **Lifecycle Stage**: Set to "Lead"
- **Lead Source**: "website_demo_form"

### 2. Support Ticket
- **Subject**: "Demo Request: [Company] - [Interest Area]"
- **Content**: Formatted message with all form details
- **Priority**: Medium
- **Source**: Web
- **Associated**: Linked to the contact record

## Setup Instructions

### Step 1: Get HubSpot API Key
1. Log into your HubSpot account
2. Go to Settings (gear icon) → Integrations → Private Apps
3. Click "Create a private app"
4. Name it "Conversia Website Integration"
5. In the **Scopes** tab, select:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `tickets.read`
   - `tickets.write`
6. Click "Create app" and copy the generated API key

### Step 2: Configure Environment Variable

#### For Replit:
1. Go to Tools → Secrets
2. Add new secret:
   - Key: `HUBSPOT_API_KEY`
   - Value: Your HubSpot API key

#### For AWS Amplify:
1. In Amplify Console → Environment Variables
2. Add:
   - Key: `HUBSPOT_API_KEY`
   - Value: Your HubSpot API key

### Step 3: Test Integration
1. Submit a demo request through your website
2. Check HubSpot for:
   - New contact in Contacts
   - New ticket in Service → Tickets
   - Contact and ticket should be associated

## Customization Options

### Modify Contact Properties
Edit `server/hubspot.ts` to add custom properties:
```typescript
properties: {
  email: formData.email,
  firstname: firstName,
  lastname: lastName,
  company: formData.company,
  // Add custom properties here
  custom_field: "value"
}
```

### Change Ticket Pipeline
Update the pipeline/stage in `server/hubspot.ts`:
```typescript
hs_pipeline: "YOUR_PIPELINE_ID",
hs_pipeline_stage: "YOUR_STAGE_ID"
```

### Interest Area Mapping
The system maps form selections to readable names:
- `vip_program` → "Early Adopter VIP Program"
- `private_chat` → "Private Chat Solution"
- `ai_role_play` → "AI Role Play Training"
- `pre_call_plan` → "Pre-Call Planning Tool"
- `all_platform` → "Complete Conversia Platform"

## Troubleshooting

### Common Issues

**"HubSpot API error: 401"**
- Check your API key is correct
- Verify the private app has required scopes

**"HubSpot API error: 409"**
- Contact already exists (this is handled automatically)

**"Failed to process demo request in HubSpot"**
- Check server logs for specific error
- Verify HubSpot service status

### Fallback Behavior
- If HubSpot integration fails, the form still works
- Data is always saved to your database first
- Users receive success message regardless of HubSpot status

## Cost Considerations
- HubSpot Free tier: Up to 1,000,000 contacts
- API calls: No additional cost for standard operations
- Private apps: Included in all HubSpot plans

## Next Steps
1. Set up automated workflows in HubSpot
2. Configure email notifications for new tickets
3. Create follow-up sequences for demo leads
4. Set up reporting dashboards