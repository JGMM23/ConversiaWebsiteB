export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold text-white mb-4 inline-block">Conversia AI</a>
            <p className="text-gray-300 mb-6">
              A unified GenAI platform empowering commercial teams to accelerate performance and scale excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <i className="ri-twitter-x-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 text-gray-300"></i>
                <a href="mailto:info@myconversia.com" className="text-gray-300 hover:text-white transition-colors">info@myconversia.com</a>
              </li>
              <li className="flex items-center">
                <i className="ri-map-pin-line mr-2 text-gray-300"></i>
                <span className="text-gray-300">Lexington, MA</span>
              </li>
              <li className="flex items-center mt-6 pt-6 border-t border-gray-700">
                <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Conversia AI. All rights reserved.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
