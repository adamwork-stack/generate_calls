"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const trackFormSubmission = (success: boolean) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", success ? "form_submit" : "form_error", {
        event_category: "Contact",
        event_label: "Contact Form",
      });
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual form submission endpoint
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, replace this with actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      console.log("Form submitted:", data);
      trackFormSubmission(true);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      trackFormSubmission(false);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const trackClick = (action: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "CTA",
        event_label: action,
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Fill out the form below or call us directly. We'll get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[\d\s\-\+\(\)]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service Needed *
                </label>
                <select
                  id="service"
                  {...register("service", { required: "Please select a service" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                >
                  <option value="">Select a service...</option>
                  <option value="hvac">HVAC Services</option>
                  <option value="plumbing">Plumbing Services</option>
                  <option value="roofing">Roofing Services</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-gray-900"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We've received your message and will contact you
                  soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get Free Quote"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Or call us directly:</p>
              <a
                href="tel:+1234567890"
                onClick={() => trackClick("Contact Form Phone")}
                className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
              >
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
