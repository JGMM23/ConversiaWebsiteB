# Conversia - AI-Powered Healthcare Tech Coaching Platform

## Overview

This project is a modern web application for Conversia AI, a business offering AI-powered coaching for healthcare technology teams. The application features a marketing website with sections including a hero banner, about, solutions, use cases, testimonials, and a contact form. It's built with React on the frontend and Express.js on the backend, using a PostgreSQL database for data storage via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with a modern React stack using TypeScript, featuring:

1. **UI Components**: Uses ShadCN UI components based on Radix UI primitives for consistent design
2. **State Management**: React Query for server state management
3. **Routing**: Wouter for lightweight client-side routing
4. **Styling**: Tailwind CSS for utility-first styling with a customized design system
5. **Animation**: Framer Motion for UI animations
6. **Form Handling**: React Hook Form with Zod validation

The frontend is organized with a clear separation of concerns:
- `/client/src/components`: Reusable UI components
- `/client/src/pages`: Page components and section content
- `/client/src/hooks`: Custom React hooks
- `/client/src/context`: React context providers
- `/client/src/lib`: Utility functions and configurations

### Backend Architecture

The backend is a Node.js application using Express:

1. **API Layer**: Express.js REST API
2. **Database**: Drizzle ORM for database interactions
3. **Validation**: Zod for schema validation

The backend features a simple API endpoint structure with:
- Contact form submission endpoint
- Newsletter subscription endpoint
- Extensible architecture for adding more endpoints

### Data Layer

The application uses Drizzle ORM with a PostgreSQL database:

1. **Schema Definition**: Located in `/shared/schema.ts`
2. **Data Access**: Server-side storage interface in `/server/storage.ts`
3. **Migrations**: Drizzle Kit for database migrations

Currently implemented schemas:
- Users table with username and password fields
- Subscribers table for newsletter sign-ups
- Contacts table for contact form submissions

## Key Components

### Frontend Components

1. **Layout**: Main layout wrapper with Header and Footer
2. **Pages**: 
   - Home: Landing page with multiple sections (Hero, About, Solutions, Use Cases, Testimonials, Contact)
   - About: Dedicated about page
   - Blog: Blog listing page
   - BlogPost: Individual blog post page
   - NotFound: 404 error page
3. **UI Components**: Extensive library of UI components based on ShadCN/Radix UI
4. **Form Components**: Specialized form components with validation

### Backend Components

1. **Express Server**: Handles HTTP requests and serves static files
2. **API Routes**: Defined in `/server/routes.ts`
3. **Storage Layer**: Interface for database operations
4. **Development Utilities**: Vite integration for development

## Data Flow

1. **User Interactions**:
   - Users browse the marketing website sections
   - Users submit the contact form
   - Users subscribe to the newsletter

2. **Contact Form Submission**:
   - Form data is validated client-side with Zod schemas
   - Data is sent to the `/api/contact` endpoint
   - Server validates data and returns success/error response
   - UI displays appropriate toast notifications

3. **Newsletter Subscription**:
   - Email is validated client-side
   - Data is sent to the `/api/subscribe` endpoint
   - Server validates and stores the email
   - UI confirms subscription with toast notification

4. **Authentication Flow** (implemented for future use):
   - User schema exists but full authentication flow is not currently active

## External Dependencies

### Frontend Dependencies

- React ecosystem (React, React DOM)
- Tailwind CSS for styling with custom color scheme
- ShadCN UI / Radix UI for component primitives
- Framer Motion for animations and visual effects
- React Hook Form for form handling and validation
- Zod for schema validation
- Wouter for client-side routing
- React Query for data fetching and state management
- Lucide React and React Icons for iconography
- Tailwind animations for enhanced user experience

### Backend Dependencies

- Express.js for the server
- Drizzle ORM for database operations
- Zod for validation
- Connect-pg-simple (for sessions)
- Neon Serverless PostgreSQL client

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - Frontend: Vite bundles the React application
   - Backend: esbuild bundles the server code

2. **Runtime Environment**:
   - Production: Node.js server serving pre-built static assets
   - Development: Vite dev server with hot module replacement

3. **Database**:
   - Configured to use PostgreSQL via Drizzle ORM
   - Migrations handled through Drizzle Kit

4. **Environment Setup**:
   - Uses Replit's built-in PostgreSQL module
   - Configured to run on port 5000 during development
   - Mapped to port 80 for public access

The deployment follows a standard pattern where the frontend is built as static assets and served by the Express backend, which also provides the API endpoints.