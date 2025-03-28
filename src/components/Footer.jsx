export default function Footer() {
    return (
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Branding */}
            <div className="flex-1">
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YourName
              </a>
              <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xs">
                Crafting digital excellence through clean code and innovative solutions
              </p>
            </div>
  
            {/* Navigation Links with Increased Spacing */}
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              
              {/* Navigation Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">
                  Navigation
                </h3>
                <div className="space-y-3">
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                      className="block text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
  
              {/* Connect Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">
                  Connect
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'LinkedIn', url: '#' },
                    { name: 'GitHub', url: '#' },
                    { name: 'Twitter', url: '#' },
                    { name: 'Email', url: 'mailto:you@example.com' },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
  
              {/* Legal Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-4">
                  Legal
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Privacy Policy
                  </a>
                  <a href="#" className="block text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Copyright and Social with Better Spacing */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} YourName. All rights reserved.
            </p>
  
            <div className="flex space-x-6">
              {[
                { name: 'GitHub', icon: 'github' },
                { name: 'LinkedIn', icon: 'linkedin' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Email', icon: 'mail' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  aria-label={social.name}
                >
                 
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  // SocialIcon component remains the same as previous example