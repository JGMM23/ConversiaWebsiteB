import { Link } from "wouter";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-muted mb-10">
            Have questions about Conversia AI? We're here to help your healthcare technology team improve performance with AI-powered coaching.
          </p>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-white text-4xl shadow-md">
              <i className="ri-message-3-line"></i>
            </div>
            <div className="space-y-4 max-w-lg">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-primary font-semibold">Email:</span>
                <a href="mailto:sales@conversia-ai.io" className="text-muted hover:text-primary transition-colors">
                  sales@conversia-ai.io
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-primary font-semibold">Headquarters:</span>
                <span className="text-muted">Lexington, MA</span>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Ready to see Conversia AI in action?</h3>
              <Link href="/get-demo" className="inline-block mt-2 bg-gradient-to-r from-[#4F2582] to-[#6e35b5] hover:from-[#6e35b5] hover:to-[#4F2582] text-white font-medium py-3 px-10 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
