import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen bg-black text-white flex flex-col md:flex-row"
    >
      {/* Left: Image */}
          <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full h-1/2 md:h-full rounded-3xl overflow-hidden p-20"
          >
              <img
                  src="/images/automobile-5330343.jpg"
                  alt="Contact Vazirani"
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition duration-500 ease-in-out"
              />
          </motion.div>


      {/* Right: Contact Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 py-12 space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Have a vision to collaborate or want to know more about Vazirani Automotive? Reach out to us today.
        </p>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 border-none rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 border-none rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-gray-800 border-none rounded-3xl px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition duration-300"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
