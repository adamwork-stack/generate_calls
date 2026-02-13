"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "HVAC Services",
    description:
      "Expert heating, cooling, and air quality solutions. Installation, repair, and maintenance for all your comfort needs.",
    icon: "❄️",
    features: ["Installation", "Repair", "Maintenance", "24/7 Emergency"],
  },
  {
    title: "Plumbing Services",
    description:
      "Professional plumbing solutions from leaks to full installations. Licensed plumbers ready to help.",
    icon: "🔧",
    features: ["Leak Repair", "Installation", "Drain Cleaning", "Water Heater"],
  },
  {
    title: "Roofing Services",
    description:
      "Quality roofing solutions that protect your home. From repairs to complete roof replacements.",
    icon: "🏠",
    features: ["Repairs", "Replacement", "Inspection", "Gutter Services"],
  },
  {
    title: "Cleaning Services",
    description:
      "Thorough, professional cleaning services for homes and businesses. Deep cleaning and regular maintenance.",
    icon: "✨",
    features: ["Deep Cleaning", "Regular Maintenance", "Commercial", "Eco-Friendly"],
  },
];

const Services = () => {
  const trackClick = (service: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "Service",
        event_label: service,
      });
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Our Services</h2>
          <p className="text-body max-w-2xl mx-auto">
            Comprehensive solutions for all your home and business needs. Quality
            service, every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => trackClick(service.title)}
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center"
              >
                Get Quote
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
