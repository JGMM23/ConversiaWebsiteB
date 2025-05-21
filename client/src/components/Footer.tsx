export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">Conversia AI</a>
            <p className="text-gray-400 mb-6">
              AI-powered coaching for healthcare technology teams to elevate commercial performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Private Chat</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">AI Role Play</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Pre-Call Planning</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Get a demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 text-gray-400"></i>
                <span className="text-gray-400">sales@myconversia.com</span>
              </li>
              <li className="flex items-center">
                <i className="ri-global-line mr-2 text-gray-400"></i>
                <span className="text-gray-400">www.myconversia.com</span>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Conversia AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
