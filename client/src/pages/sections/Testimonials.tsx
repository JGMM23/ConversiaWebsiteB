export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-accent">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Healthcare Tech Leaders Say</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ opacity: 0 }}>
            <div className="flex items-center mb-4">
              <div className="text-primary text-xl">
                <i className="ri-double-quotes-l"></i>
              </div>
            </div>
            <p className="text-muted mb-6 italic">
              "Conversia AI has transformed how our sales teams prepare for high-stakes provider conversations. The role-play simulations have significantly improved our reps' confidence and effectiveness."
            </p>
            <div className="flex items-center">
              <div className="mr-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-secondary font-medium">DR</span>
              </div>
              <div>
                <p className="font-semibold">David Rodriguez</p>
                <p className="text-sm text-muted">VP of Sales, Medical Devices Company</p>
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
              "The speed of implementation and quality we get with Conversia AI is unmatched. We've cut our training costs by 35% while improving our conversion rates and customer satisfaction scores."
            </p>
            <div className="flex items-center">
              <div className="mr-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-secondary font-medium">SJ</span>
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted">Director of Commercial Excellence, Healthcare Technology</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                  <i className="ri-user-star-line text-primary text-4xl"></i>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-xl font-semibold mb-3">About Our Founder and CEO</h3>
                <p className="text-muted mb-4">
                  Jose Molina is a seasoned product and marketing leader with extensive experience helping healthcare organizations leverage cutting-edge technologies to drive sales growth and operational efficiency.
                </p>
                <p className="text-muted">
                  With leadership roles at Johnson & Johnson, Fresenius (NxStage), Medtronic, and GE Healthcare, Jose has launched 15+ innovative products and recently pioneered a GenAI solution at J&J that revolutionized field enablement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
