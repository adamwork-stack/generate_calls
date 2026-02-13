"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Local Homeowner",
    rating: 5,
    text: "Outstanding service! They fixed our HVAC system quickly and professionally. The technician was knowledgeable and courteous. Highly recommend!",
    service: "HVAC Services",
  },
  {
    name: "Michael Chen",
    location: "Business Owner",
    rating: 5,
    text: "We've used their plumbing services multiple times. Always reliable, fair pricing, and excellent workmanship. They're our go-to plumbers now.",
    service: "Plumbing Services",
  },
  {
    name: "Emily Rodriguez",
    location: "Property Manager",
    rating: 5,
    text: "The roofing team did an amazing job on our building. Clean work, on time, and within budget. Couldn't be happier with the results!",
    service: "Roofing Services",
  },
  {
    name: "David Thompson",
    location: "Homeowner",
    rating: 5,
    text: "Best cleaning service we've ever used! They're thorough, professional, and use eco-friendly products. Our home has never looked better.",
    service: "Cleaning Services",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">What Our Customers Say</h2>
          <p className="text-body max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real customers have to
            say about their experience with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg border border-primary-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
              <div className="border-t border-primary-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-primary-600 mt-1">
                  {testimonial.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
