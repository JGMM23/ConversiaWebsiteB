import { useEffect } from "react";
import joseMolinaImage from "@assets/JMolinaheadshot.jpg";

export default function About() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
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
            <div className="text-center mt-6">
              <p className="text-sm flex items-center justify-center text-primary">
                <i className="ri-map-pin-2-fill mr-1"></i>
                Headquartered in Lexington, MA, just outside Boston
              </p>
            </div>
          </div>
        </div>

        {/* Our Team section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Founder and CEO</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="h-64 w-64 bg-accent rounded-xl mx-auto mb-6 overflow-hidden shadow-lg">
                <img 
                  src={joseMolinaImage} 
                  alt="Jose Molina, Founder & CEO" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-primary">Jose Molina</h3>
              <div className="space-y-4 text-muted">
                <p>
                  Jose Molina is a seasoned product and marketing leader with extensive experience helping organizations leverage cutting-edge technologies to drive sales growth, innovation, and operational efficiency.
                </p>
                <p>
                  Jose brings years of experience in leadership roles at top-tier organizations including Johnson & Johnson, Fresenius (NxStage), Medtronic, and GE Healthcare, where he drove growth, launched transformative products, and optimized operations.
                </p>
                <p>
                  Throughout his career, Jose has led the development and launch of 15+ innovative products, including devices, SaaS and Connected Health platforms as well as AI-powered tools, that have reshaped industries and delivered measurable results.
                </p>
                <p>
                  Recently, while at J&J, Jose pioneered a GenAI solution that revolutionized field enablement and was widely adopted by multiple J&J units.
                </p>
                <p>
                  Jose holds an MBA from Northwestern University's Kellogg School of Management and a Bachelor of Science in Industrial Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your team's capabilities?</h2>
          <a 
            href="/get-demo" 
            className="inline-block bg-gradient-to-r from-[#4F2582] to-[#6e35b5] hover:from-[#6e35b5] hover:to-[#4F2582] text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Get a Demo
          </a>
        </div>
      </div>
    </div>
  );
}