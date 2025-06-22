export default function ServiceOfferings() {
  return (
    <section id="solutions" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">One Platform. Three Powerful AI Use Cases</h2>
          <p className="text-large text-neutral-700">
            Conversia AI provides a unified platform with multiple AI-powered features designed specifically for healthcare technology commercial teams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="card card-hover animate-fade-in" style={{ opacity: 0 }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Private Chat</h3>
                <p className="text-neutral-700">Instant access to company knowledge and coaching</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-chat-3-line"></i>
              </span>
            </div>
            <p className="text-neutral-700 mb-6">
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
          
          <div className="card card-hover animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">AI Role Play</h3>
                <p className="text-neutral-700">Realistic virtual customer simulations</p>
              </div>
              <span className="text-3xl text-primary">
                <i className="ri-group-line"></i>
              </span>
            </div>
            <p className="text-neutral-700 mb-6">
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
          
          <div className="card card-hover animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Pre-Call Plan</h3>
                <p className="text-neutral-700">AI coaching for customer-specific preparation</p>
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

      </div>
    </section>
  );
}
