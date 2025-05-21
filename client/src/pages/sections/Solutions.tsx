export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One Platform. Three Powerful AI Use Cases</h2>
          <p className="text-lg text-muted">
            Conversia AI provides a unified platform with multiple AI-powered features designed specifically for healthcare technology commercial teams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in" style={{ opacity: 0 }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Private Chat</h3>
                <p className="text-muted">Instant access to company knowledge and coaching</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-chat-3-line"></i>
              </span>
            </div>
            <p className="text-muted mb-6">
              Help your teams find precise information rapidly with AI that leverages your company's documents such as IFUs, labeling, clinical evidence, and more.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Instant knowledge reduces time to learn</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Uses your company's existing documents</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Deployed in days with no IT lift</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">AI Role Play</h3>
                <p className="text-muted">Realistic virtual customer simulations</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-group-line"></i>
              </span>
            </div>
            <p className="text-muted mb-6">
              Practice conversations with a realistic virtual partner customized to your specific scenarios and receive immediate feedback and coaching.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Accelerate learning with realistic practice</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Scenarios tailored to your company's needs</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Immediate coaching improves performance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Pre-Call Plan</h3>
                <p className="text-muted">AI coaching for customer-specific preparation</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-calendar-check-line"></i>
              </span>
            </div>
            <p className="text-muted mb-6">
              Provide a few pieces of information and get customer-specific guidance before your meetings, including preparation for likely objections.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Customer-specific guidance and coaching</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Prepare for likely objections in advance</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-primary text-xl mr-2"></i>
                <span>Reinforce consistent messaging strategy</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border border-primary/20">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Why Conversia AI?</h3>
              <p className="text-muted mb-6">
                Because we're designed specifically for the workflows and complexity of healthcare tech, with enterprise-grade privacy and security built in.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="ri-check-line text-primary text-xl mr-2"></i>
                  <span>Customized GenAI trained on your data, workflows and tactics</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-primary text-xl mr-2"></i>
                  <span>Consistent experience across teams</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-primary text-xl mr-2"></i>
                  <span>LLMs agnostic - the right model for each use case</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-primary text-xl mr-2"></i>
                  <span>Deployed in days with white glove implementation</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-highlight hover:bg-highlight/90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Join VIP Program
              </a>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex items-center justify-center">
              <span className="text-6xl text-primary">
                <i className="ri-rocket-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
