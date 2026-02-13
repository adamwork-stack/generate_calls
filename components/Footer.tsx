"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ServicePro</h3>
            <p className="text-gray-400">
              Professional local services you can trust. Licensed, insured, and
              committed to excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  HVAC Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Plumbing Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Roofing Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cleaning Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  📞 (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@servicepro.com"
                  className="hover:text-white transition-colors"
                >
                  ✉️ info@servicepro.com
                </a>
              </li>
              <li className="text-gray-400">
                123 Main Street<br />
                Your City, ST 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} ServicePro. All rights reserved. | Licensed &
            Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
