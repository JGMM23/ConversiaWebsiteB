export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-lg text-muted">
            See how businesses across industries are using Conversia to connect with global audiences authentically.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Use Case 1 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ opacity: 0 }}>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Tech company digital marketing materials" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Global Tech Innovator</h3>
                <span className="bg-accent text-primary text-xs font-medium px-3 py-1 rounded-full">SaaS</span>
              </div>
              <p className="text-muted mb-4">
                Reduced localization time for product documentation by 70% while entering 8 new markets in just 3 months.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-primary font-medium">Results:</span>
                  <span className="text-muted ml-2">40% growth in international users</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Case 2 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <img 
              src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="E-commerce store on multiple devices" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Fashion E-Commerce Leader</h3>
                <span className="bg-accent text-primary text-xs font-medium px-3 py-1 rounded-full">Retail</span>
              </div>
              <p className="text-muted mb-4">
                Scaled product catalog localization across 12 languages, maintaining consistent brand voice and cultural relevance.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-primary font-medium">Results:</span>
                  <span className="text-muted ml-2">52% increase in conversion rates</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Case 3 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Marketing team reviewing global campaign" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">International Marketing Agency</h3>
                <span className="bg-accent text-primary text-xs font-medium px-3 py-1 rounded-full">Marketing</span>
              </div>
              <p className="text-muted mb-4">
                Deployed culturally-adapted campaigns across 20+ markets simultaneously, maintaining consistent brand messaging.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-primary font-medium">Results:</span>
                  <span className="text-muted ml-2">3x ROI on international campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block border border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-lg transition-colors">
            See More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}
