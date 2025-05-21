import { Link } from "wouter";
import { useEffect } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { useMobileMenu } from "@/context/MobileMenuContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const { isScrolled } = useScroll(10);
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  // Close mobile menu on window resize (if width increases beyond mobile breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, closeMenu]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-white bg-opacity-95 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-3" : "py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <i className="ri-chat-smile-line text-white text-xl"></i>
            </div>
            <span className="text-primary text-2xl font-bold">CONVERSIA AI</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          aria-label="Toggle menu"
          className="md:hidden text-secondary" 
          onClick={toggleMenu}
        >
          <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white px-4 py-4 shadow-md ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-medium text-secondary hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
