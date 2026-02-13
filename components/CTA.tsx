"use client";

import { motion } from "framer-motion";

const CTA = () => {
  const trackClick = (action: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "CTA",
        event_label: action,
      });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't wait for problems to get worse. Contact us today for fast,
            reliable service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              onClick={() => trackClick("CTA Section Call")}
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              📞 Call Now: (123) 456-7890
            </a>
            <a
              href="#contact"
              onClick={() => trackClick("CTA Section Quote")}
              className="bg-primary-500 hover:bg-primary-400 text-white font-bold py-4 px-8 rounded-lg text-lg border-2 border-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
