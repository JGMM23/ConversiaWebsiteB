import { Link } from "wouter";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";


export default function Blog() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        credentials: 'include'
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to subscribe");
      }
      
      toast({
        title: "Success!",
        description: data.message || "You've been subscribed to our newsletter!",
        variant: "default",
      });
      
      // Clear the form
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Subscription failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Blog header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Blog</h1>
          <p className="text-xl text-muted">
            Insights and perspectives on AI in healthcare technology
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog post card */}
            <Link href="/blog/health-tech-ai-moment">
              <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <div className="h-48 bg-gradient-to-r from-[#005DA5] to-[#008656] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E94F3D]/20 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#EBAA20]/20 rounded-full -ml-8 -mb-8"></div>
                  <div className="text-center text-white px-6 relative z-10">
                    <i className="ri-ai-generate text-6xl mb-2 text-[#EBAA20]"></i>
                    <h3 className="text-lg font-medium">The State of AI in Healthcare</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold text-primary mb-4">Is Health Tech missing its AI moment?</h2>
                  <p className="text-secondary mb-4">
                    McKinsey's latest State of AI report reveals something interesting—while AI is transforming industries, 
                    health tech companies are still in the early days.
                  </p>
                  <div className="flex items-center text-sm text-muted">
                    <span className="mr-4">May 20, 2025</span>
                    <span className="flex items-center">
                      <i className="ri-time-line mr-1"></i> 4 min read
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Empty placeholder for future blog posts */}
            <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-md h-full flex flex-col opacity-50">
              <div className="h-48 bg-gradient-to-r from-[#B32271] to-[#EBAA20] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#008656]/20 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#005DA5]/20 rounded-full -ml-8 -mb-8"></div>
                <div className="text-center text-white px-6 relative z-10">
                  <i className="ri-article-line text-6xl mb-2 text-white"></i>
                  <h3 className="text-lg font-medium">Coming Soon</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-primary mb-4">More insights coming soon</h2>
                <p className="text-secondary mb-4">
                  We're working on more articles and insights about AI in healthcare technology. 
                  Check back soon for more content.
                </p>
                <div className="flex items-center text-sm text-muted">
                  <span className="mr-4">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter sign up */}
        <div className="max-w-3xl mx-auto bg-accent p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay updated</h2>
          <p className="text-muted mb-6">
            Subscribe to our newsletter to get the latest insights on AI in healthcare technology.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <button 
              type="submit" 
              className="bg-highlight hover:bg-highlight/90 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Subscribing...
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}