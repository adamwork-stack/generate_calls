"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trackClick = (action: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "CTA",
        event_label: action,
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600">
              ServicePro
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="tel:+1234567890"
              onClick={() => trackClick("Header Phone")}
              className="btn-primary"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                <a
                  href="#services"
                  className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#why-us"
                  className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Us
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="tel:+1234567890"
                  onClick={() => {
                    trackClick("Mobile Header Phone");
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-primary inline-block"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
