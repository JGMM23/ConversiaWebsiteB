import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  interest: z.string().min(1, { message: "Please select an interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  consent: z.boolean().refine((val) => val === true, { message: "You must agree to receive communications." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      interest: "",
      message: "",
      consent: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest in our VIP program. We'll contact you soon to schedule a consultation.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Your application couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Early Adopter VIP Program</h2>
          <p className="text-lg text-muted">
            Be among the first healthcare technology leaders to implement Conversia AI's coaching platform and gain a competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="bg-accent rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-4">VIP Program Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <span>Priority implementation support and customization</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <span>White-glove onboarding and training for your team</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <span>Preferred pricing and early access to new features</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <span>Direct access to our founder and product team</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <span>Influence product roadmap and future development</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted">sales@myconversia.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-global-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Website</h4>
                    <p className="text-muted">www.myconversia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
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
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-muted">
                          I agree to receive communications from Conversia AI about the VIP program
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={mutation.isPending} 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {mutation.isPending ? "Submitting..." : "Apply for VIP Program"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
