import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Please enter your company name" }),
  interest: z.string().min(1, { message: "Please select an area of interest" }),
  message: z.string().min(10, { message: "Please tell us a bit more about your needs" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function GetDemo() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch soon about your demo.",
      });
      form.reset();
      setSubmitted(true);
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Demo</h1>
          <p className="text-lg text-muted">
            See how Conversia AI can help your healthcare technology team improve performance with AI-powered coaching.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl text-primary mb-4">
                <i className="ri-check-line"></i>
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="mb-8">
                Your demo request has been received. One of our team members will contact you shortly to schedule your personalized demo.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-gradient-to-r from-[#4F2582] to-[#6e35b5] hover:from-[#6e35b5] hover:to-[#4F2582] text-white"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-muted">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-muted">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Healthcare Tech Company" {...field} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted">I'm interested in</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                              <SelectValue placeholder="Select your primary interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="vip_program">Early Adopter VIP Program</SelectItem>
                            <SelectItem value="private_chat">Private Chat Solution</SelectItem>
                            <SelectItem value="ai_role_play">AI Role Play Training</SelectItem>
                            <SelectItem value="pre_call_plan">Pre-Call Planning Tool</SelectItem>
                            <SelectItem value="all_platform">Complete Conversia Platform</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted">Tell us about your team's needs</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your current challenges with sales team readiness and what you hope to achieve with Conversia AI..." 
                            {...field} 
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={mutation.isPending} 
                    className="w-full bg-gradient-to-r from-[#4F2582] to-[#6e35b5] hover:from-[#6e35b5] hover:to-[#4F2582] text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:shadow-none"
                  >
                    {mutation.isPending ? "Submitting..." : "Request Your Demo"}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}