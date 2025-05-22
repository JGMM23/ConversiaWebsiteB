import { users, subscribers, contacts, type User, type InsertUser, type Subscriber, type Contact, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subscribers methods
  addSubscriber(email: string): Promise<boolean>;
  getSubscribers(): Promise<Subscriber[]>;
  
  // Contact form methods
  submitContactForm(contact: InsertContact): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private contacts: Map<number, Contact>;
  currentId: number;
  currentSubId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.contacts = new Map();
    this.currentId = 1;
    this.currentSubId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Implement subscriber methods for memory storage
  async addSubscriber(email: string): Promise<boolean> {
    // Check if email already exists
    const existingSubscriber = Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email
    );
    
    if (existingSubscriber) {
      return false; // Email already subscribed
    }
    
    const id = this.currentSubId++;
    const now = new Date();
    const subscriber: Subscriber = { 
      id, 
      email, 
      createdAt: now 
    };
    
    this.subscribers.set(id, subscriber);
    return true;
  }
  
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
  
  async submitContactForm(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const now = new Date();
    const newContact: Contact = { 
      ...contact, 
      id, 
      createdAt: now 
    };
    
    this.contacts.set(id, newContact);
    return newContact;
  }
  
  async getContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

// Create a database storage implementation that will use PostgreSQL
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  async addSubscriber(email: string): Promise<boolean> {
    try {
      await db
        .insert(subscribers)
        .values({ email })
        .returning();
      return true;
    } catch (error) {
      console.error("Error adding subscriber:", error);
      return false;
    }
  }
  
  async getSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers);
  }
  
  async submitContactForm(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db
      .insert(contacts)
      .values(contact)
      .returning();
    return newContact;
  }
  
  async getContactSubmissions(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }
}

// Use the DatabaseStorage implementation since we have PostgreSQL available
export const storage = new DatabaseStorage();
