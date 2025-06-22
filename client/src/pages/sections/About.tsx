export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">In Healthcare Tech, Every Conversation Counts</h2>
          <p className="text-large text-neutral-700">
            Customer conversations in healthcare technology are high-stakes and directly influence critical patient care decisions. Success requires earning trust from highly knowledgeable experts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent rounded-xl p-8 animate-fade-in" style={{ opacity: 0 }}>
            <div className="text-white text-6xl mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-highlight shadow-md mx-auto transform hover:scale-105 transition-transform">
              <i className="ri-heart-pulse-fill"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">High-Stakes Conversations</h3>
            <p className="text-neutral-700">
              Healthcare tech conversations directly influence patient care decisions and require both clinical and technical expertise to navigate effectively.
            </p>
          </div>
          
          <div className="bg-accent rounded-xl p-8 animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="text-white text-6xl mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-primary shadow-md mx-auto transform hover:scale-105 transition-transform">
              <i className="ri-time-fill"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Limited Provider Time</h3>
            <p className="text-neutral-700">
              Healthcare providers are busier than ever, with minimal time for education and interactions with industry representatives.
            </p>
          </div>
          
          <div className="bg-accent rounded-xl p-8 animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <div className="text-white text-6xl mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-primary to-highlight shadow-md mx-auto transform hover:scale-105 transition-transform">
              <i className="ri-bubble-chart-fill"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Complex Discussions</h3>
            <p className="text-muted">
              Effective healthcare tech conversations require blending technology, science, clinical knowledge, regulatory concerns, and business insights.
            </p>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Traditional Sales Readiness Struggles</h2>
              <p className="text-lg text-muted mb-6">
                Healthcare technology teams need better preparation for critical customer conversations than traditional training methods can provide.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Long onboarding and ramp when launching products and campaigns</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Manager bandwidth limits coaching opportunities</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Inconsistent rep preparation and performance</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Poor visibility into training effectiveness and ROI</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Lack of real-world practice opportunities</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{ opacity: 0 }}>
              <div className="overflow-hidden rounded-xl shadow-lg max-w-md mx-auto">
                <img 
                  src="/medical-training.png" 
                  alt="Medical professionals during training" 
                  className="w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
