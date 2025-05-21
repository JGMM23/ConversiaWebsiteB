export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Conversia Solution</h2>
          <p className="text-lg text-muted">
            Our AI-powered platform combines the speed and efficiency of machine translation with the cultural nuance and accuracy of human expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in" style={{ opacity: 0 }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">AI-Powered Localization</h3>
                <p className="text-muted">Intelligent translation that preserves context and voice</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-translate-2"></i>
              </span>
            </div>
            <p className="text-muted mb-6">
              Our advanced AI models understand context, tone, and cultural nuances to deliver translations that feel natural to local audiences while preserving your brand's authentic voice.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Preserves brand voice across languages</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Handles context and cultural references</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>60% faster than traditional methods</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Cultural Adaptation Engine</h3>
                <p className="text-muted">Beyond translation to true cultural relevance</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-global-line"></i>
              </span>
            </div>
            <p className="text-muted mb-6">
              Our platform doesn't just translate words—it adapts your message to resonate with the cultural expectations, preferences, and sensitivities of each target market.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Adjusts expressions to local conventions</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Handles idioms and cultural references</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Respects regional sensitivities</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-muted">Connect with your existing workflow</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-plug-line"></i>
              </span>
            </div>
            <p className="text-muted mb-6">
              Conversia integrates with your CMS, marketing platforms, and development workflows to make localization a natural part of your content lifecycle.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Works with all major CMS platforms</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>API-first architecture for custom needs</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Automated content synchronization</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in" style={{ opacity: 0, animationDelay: "0.4s" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted">Ensuring accuracy and cultural fit</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-shield-check-line"></i>
              </span>
            </div>
            <p className="text-muted mb-6">
              Our hybrid approach combines AI efficiency with expert human review to guarantee quality that matches or exceeds traditional translation services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>AI-assisted human review process</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Cultural relevance verification</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Consistent terminology management</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border border-primary/20">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">See Conversia in Action</h3>
              <p className="text-muted mb-6">
                Experience how Conversia can transform your localization process, cutting time and costs while improving quality and cultural relevance.
              </p>
              <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Request a Demo
              </a>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex items-center justify-center">
              <span className="text-6xl text-primary">
                <i className="ri-presentation-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
