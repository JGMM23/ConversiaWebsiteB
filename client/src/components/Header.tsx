import { Link } from "wouter";
import { useEffect } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { useMobileMenu } from "@/context/MobileMenuContext";
import conversiaLogo from "../assets/conversia-logo.png";

const navLinks = [
  { name: "Explore", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Get a Demo", href: "/get-demo" },
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
            <img src={conversiaLogo} alt="Conversia AI Logo" className="h-10 w-auto" />
            <span className="text-primary text-2xl font-bold">CONVERSIA AI</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-8 mr-8">
            {navLinks.map((link) => 
              link.name === "Get a Demo" ? (
                <a 
                  key={link.name}
                  href={link.href}
                  className="bg-gradient-to-r from-[#4F2582] to-[#6e35b5] hover:from-[#6e35b5] hover:to-[#4F2582] text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  {link.name}
                </a>
              ) : (
                <a 
                  key={link.name}
                  href={link.href}
                  className="font-medium text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
          <a 
            href="/login" 
            className="btn-secondary"
          >
            Log In
          </a>
        </div>
        
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
          {navLinks.map((link) => 
            link.name === "Get a Demo" ? (
              <a 
                key={link.name}
                href={link.href}
                className="btn-primary text-center"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                className="font-medium text-secondary hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            )
          )}
          <a 
            href="/login" 
            className="bg-gradient-to-r from-[#B64621] to-[#d65a32] hover:from-[#d65a32] hover:to-[#B64621] text-white font-medium py-2 px-4 rounded-lg text-center transition-all shadow-md mt-2"
            onClick={closeMenu}
          >
            Log In
          </a>
        </nav>
      </div>
    </header>
  );
}
