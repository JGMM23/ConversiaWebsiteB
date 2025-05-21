import { useEffect } from "react";
import Hero from "@/pages/sections/Hero";
import About from "@/pages/sections/About";
import Solutions from "@/pages/sections/Solutions";
import UseCases from "@/pages/sections/UseCases";
import Testimonials from "@/pages/sections/Testimonials";
import Contact from "@/pages/sections/Contact";

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
      <Solutions />
      <UseCases />
      <Testimonials />
      <Contact />
    </>
  );
}
