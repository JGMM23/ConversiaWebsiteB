export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Healthcare Tech Leaders Can Expect</h2>
          <p className="text-lg text-muted">
            AI is ready, and your teams can't wait. See the proven ROI and benefits healthcare technology leaders are experiencing with Conversia AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" style={{ opacity: 0 }}>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <i className="ri-rocket-line text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold">Faster Onboarding</h3>
              </div>
              <p className="text-muted mb-4 flex-grow">
                Reduce onboarding time for new team members and accelerate product launch readiness with AI-powered training and role-play simulations.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <span className="text-primary font-medium">Impact:</span>
                <span className="text-muted ml-2">Quicker revenue impact and faster market penetration</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <i className="ri-line-chart-line text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold">Improved Performance</h3>
              </div>
              <p className="text-muted mb-4 flex-grow">
                Enhance conversion rates, objection handling, and overall customer satisfaction with consistent AI coaching across your entire team.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <span className="text-primary font-medium">Impact:</span>
                <span className="text-muted ml-2">Higher win rates and improved customer relationships</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <i className="ri-money-dollar-circle-line text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold">Lower Training Costs</h3>
              </div>
              <p className="text-muted mb-4 flex-grow">
                Reduce the number of training hours needed while improving effectiveness, allowing your teams to spend more time with customers.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <span className="text-primary font-medium">Impact:</span>
                <span className="text-muted ml-2">Up to $3.70 return for every $1 invested in AI</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" style={{ opacity: 0, animationDelay: "0.4s" }}>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <i className="ri-shield-check-line text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold">Greater Consistency</h3>
              </div>
              <p className="text-muted mb-4 flex-grow">
                Ensure all team members stay compliant and on-message with consistent AI guidance based on your approved content and strategies.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <span className="text-primary font-medium">Impact:</span>
                <span className="text-muted ml-2">Reduced compliance risk and stronger brand message</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-accent rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">AI is Ready. Your Teams Can't Wait.</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <p className="text-muted">78% of organizations now use AI in at least one business function</p>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <p className="text-muted">66% of companies using gen AI in marketing and sales report revenue increases</p>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-primary text-xl mt-0.5 mr-2"></i>
                  <p className="text-muted">92% of early adopters reported their GenAI initiatives were already paying for themselves</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Early Adopter VIP Program</h4>
                <p className="text-muted mb-6">
                  Join our exclusive program for healthcare tech leaders looking to gain a competitive advantage with AI-powered conversation coaching.
                </p>
                <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full text-center">
                  Apply for VIP Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
