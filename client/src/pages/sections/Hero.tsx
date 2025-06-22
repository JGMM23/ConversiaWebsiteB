import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Link } from "wouter";
import conversiaUI from "../../assets/conversia-ui.png";
import healthcareTeam from "../../assets/healthcare-team.png";

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
    <section id="hero" className="section-padding pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-accent to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#4F2582]/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#6e35b5]/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#B64621]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Sales Performance with AI-Powered Coaching
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-lg">
              Conversia AI helps healthcare technology teams prepare for high-stakes customer conversations with AI-powered coaching that drives results.
            </p>
            <div className="flex justify-start">
              <motion.button 
                onClick={() => window.location.href = '/get-demo'}
                className="inline-block bg-gradient-to-r from-[#4F2582] to-[#6e35b5] hover:from-[#6e35b5] hover:to-[#4F2582] text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                Get a Demo
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0],
              transition: {
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }
              }
            }}
          >
            {/* Hero image */}
            <img 
              src={healthcareTeam} 
              alt="Healthcare team collaborating" 
              className="rounded-xl shadow-xl w-full max-w-xl mr-0"
            />
          </motion.div>
        </div>
        

      </div>
    </section>
  );
}
