export default function Testimonials() {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ opacity: 0 }}>
            <div className="flex items-center mb-4">
              <div className="text-primary text-xl">
                <i className="ri-double-quotes-l"></i>
              </div>
            </div>
            <p className="text-muted mb-6 italic">
              "Conversia has transformed how we approach global markets. The cultural nuance in their translations has significantly improved our engagement in Asian markets."
            </p>
            <div className="flex items-center">
              <div className="mr-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-secondary font-medium">JD</span>
              </div>
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-sm text-muted">CMO, Global Tech Solutions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="flex items-center mb-4">
              <div className="text-primary text-xl">
                <i className="ri-double-quotes-l"></i>
              </div>
            </div>
            <p className="text-muted mb-6 italic">
              "The speed and quality we get with Conversia is unmatched. We've cut our localization costs by 40% while improving the quality of our international content."
            </p>
            <div className="flex items-center">
              <div className="mr-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-secondary font-medium">MS</span>
              </div>
              <div>
                <p className="font-semibold">Michael Smith</p>
                <p className="text-sm text-muted">Director of Content, E-commerce Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
