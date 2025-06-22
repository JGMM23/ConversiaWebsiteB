import { useEffect } from "react";
import Hero from "@/pages/sections/Hero";
import About from "@/pages/sections/About";
import ServiceOfferings from "@/pages/sections/ServiceOfferings";
import HealthcareSolutions from "@/pages/sections/HealthcareSolutions";
import CompanyInfo from "@/pages/sections/CompanyInfo";

export default function Home() {
  // Set up intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-fade-in");
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <ServiceOfferings />
      <HealthcareSolutions />
      <CompanyInfo />
    </>
  );
}
