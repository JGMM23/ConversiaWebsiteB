import { useEffect } from "react";
import Layout from "@/components/Layout";

export default function About() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Mission & Vision section with visual elements */}
          <div className="mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 -mt-16 -mr-16 bg-gradient-to-br from-[#005DA5]/20 to-[#72A84D]/20 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 -mb-12 -ml-12 bg-gradient-to-tr from-[#EBAA20]/20 to-[#B32271]/20 rounded-full"></div>
            
            <div className="max-w-5xl mx-auto bg-white rounded-xl p-10 shadow-lg border border-primary/10 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Conversia AI</h1>
                  <div className="space-y-6">
                    <p className="text-lg text-muted">
                      We empower commercial teams with a unified GenAI platform that accelerates performance, reduces costs, and scales excellence.
                    </p>
                    <p className="text-lg text-muted">
                      We deliver customizable, secure AI-powered applications and agents that replicate expert-level execution, streamline workflows, and institutionalize best practices.
                    </p>
                    <p className="text-lg text-muted">
                      We strive to eliminate dozens of copilots and point solutions to help you unlock competitive advantage.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#005DA5] text-white h-36 w-36 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                      <i className="ri-ai-generate text-7xl"></i>
                    </div>
                    <div className="bg-[#72A84D] text-white h-36 w-36 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                      <i className="ri-rocket-fill text-7xl"></i>
                    </div>
                    <div className="bg-[#EBAA20] text-white h-36 w-36 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                      <i className="ri-team-fill text-7xl"></i>
                    </div>
                    <div className="bg-[#B32271] text-white h-36 w-36 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform shadow-lg">
                      <i className="ri-shield-check-fill text-7xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-40 w-40 bg-accent rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                    alt="David Chen, CEO" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">David Chen</h3>
                <p className="text-highlight font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-muted">
                  Former healthcare tech executive with 15+ years experience in AI and machine learning applications.
                </p>
              </div>
              <div className="text-center">
                <div className="h-40 w-40 bg-accent rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                    alt="Sarah Johnson, CTO" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-highlight font-medium mb-2">CTO & Co-Founder</p>
                <p className="text-muted">
                  AI researcher with PhD in computational linguistics and experience building enterprise-scale LLM applications.
                </p>
              </div>
              <div className="text-center">
                <div className="h-40 w-40 bg-accent rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                    alt="Michael Torres, CPO" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">Michael Torres</h3>
                <p className="text-highlight font-medium mb-2">Chief Product Officer</p>
                <p className="text-muted">
                  Product leader with expertise in healthcare SaaS solutions and a passion for user-centered design.
                </p>
              </div>
            </div>
          </div>

{/* Contact CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your team's capabilities?</h2>
            <a 
              href="/#contact" 
              className="inline-block bg-highlight hover:bg-highlight/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get a demo
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}