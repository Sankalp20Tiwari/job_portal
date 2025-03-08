import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand & Description */}
          <div>
            <h2 className="text-xl font-bold text-white">Job Portal</h2>
            <p className="mt-2 text-sm">
              Connecting job seekers with top employers worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <a href="/about" className="hover:text-white">About Us</a>
            <a href="/jobs" className="hover:text-white">Find Jobs</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 hover:text-blue-600" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Job Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
