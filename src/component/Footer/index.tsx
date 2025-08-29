// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06060c] text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <h2 className="text-2xl font-bold text-white">BoostAI</h2>
            <p className="text-gray-400">
              Boost your productivity with AI-powered automation and content
              generation.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 md:w-2/3 justify-end">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-white transition">
                    🐦
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    📘
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    📸
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BoostAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
