import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
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
                  <div className="h-48 bg-gradient-to-r from-[#4F2582]/90 to-[#B64621]/90 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <i className="ri-ai-generate text-6xl mb-2"></i>
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
                <div className="h-48 bg-gradient-to-r from-[#005DA5]/90 to-[#72A84D]/90 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <i className="ri-article-line text-6xl mb-2"></i>
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="bg-highlight hover:bg-highlight/90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}