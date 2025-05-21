export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Localization Matters</h2>
          <p className="text-lg text-muted">
            In today's global marketplace, speaking your customer's language isn't just about translation—it's about cultural connection, trust, and authentic engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent rounded-xl p-8 animate-fade-in" style={{ opacity: 0 }}>
            <div className="text-primary text-4xl mb-4">
              <i className="ri-global-line"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
            <p className="text-muted">
              Access new markets and connect with international audiences through perfectly localized content that respects cultural nuances.
            </p>
          </div>
          
          <div className="bg-accent rounded-xl p-8 animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="text-primary text-4xl mb-4">
              <i className="ri-emotion-line"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cultural Relevance</h3>
            <p className="text-muted">
              Building trust requires more than correct grammar—it demands cultural understanding that resonates with local audiences.
            </p>
          </div>
          
          <div className="bg-accent rounded-xl p-8 animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <div className="text-primary text-4xl mb-4">
              <i className="ri-line-chart-line"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
            <p className="text-muted">
              Companies investing in quality localization see 1.5x higher conversion rates and increased customer loyalty.
            </p>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Localization Challenge</h2>
              <p className="text-lg text-muted mb-6">
                Traditional localization is slow, expensive, and often fails to capture the authentic voice behind your message. Businesses need a solution that scales without sacrificing quality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Time-consuming manual processes</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">High costs for professional translation</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Inconsistent brand voice across languages</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-close-circle-line text-red-500 text-xl mt-0.5 mr-2"></i>
                  <span className="text-muted">Difficulty maintaining content updates</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{ opacity: 0 }}>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Teams collaborating across borders" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
