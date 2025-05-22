import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import conversiaUI from "../../assets/conversia-ui.png";

export default function Hero() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);
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
              Elevate Sales Performance with AI-Powered Coaching
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-lg">
              Conversia AI helps healthcare technology teams prepare for high-stakes customer conversations with AI-powered coaching that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-[#4F2582] to-[#6e35b5] hover:from-[#6e35b5] hover:to-[#4F2582] text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get a demo
              </a>
              <a 
                href="#solutions" 
                className="inline-block border-2 border-[#4F2582] text-[#4F2582] hover:bg-[#4F2582]/10 font-medium py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
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
              src="https://images.pexels.com/photos/7550304/pexels-photo-7550304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Conversia AI Platform Interface" 
              className="rounded-xl shadow-xl mx-auto w-full max-w-xl"
            />
          </motion.div>
        </div>
        

      </div>
    </section>
  );
}
