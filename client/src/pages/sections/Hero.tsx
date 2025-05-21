import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="section-padding pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Break language barriers with AI-powered localization
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-lg">
              Conversia helps businesses connect with global audiences through culturally relevant, AI-powered localization that preserves your authentic voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a 
                href="#solutions" 
                className="inline-block border border-primary text-primary hover:bg-primary/5 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Hero image */}
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Global communication concept" 
              className="rounded-xl shadow-xl mx-auto"
            />
          </motion.div>
        </div>
        
        <div className="mt-16 md:mt-24 py-8 border-t border-gray-200">
          <p className="text-center text-muted mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            <span className="text-xl font-semibold text-muted">Company A</span>
            <span className="text-xl font-semibold text-muted">Company B</span>
            <span className="text-xl font-semibold text-muted">Company C</span>
            <span className="text-xl font-semibold text-muted">Company D</span>
          </div>
        </div>
      </div>
    </section>
  );
}
