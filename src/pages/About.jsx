import React from "react";
import { motion } from "framer-motion";
import { FaCarSide, FaBolt, FaLeaf, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-20">
        {/* Section 1: Hero About */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <img
              src="/images/lamborghini-4815249.jpg"
              alt="Vazirani Shul"
              className="rounded-3xl shadow-2xl object-cover w-full hover:scale-105"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
              <FaCarSide className="text-primary" />
              About Vazirani
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Vazirani Automotive is India's pioneering hypercar brand, setting
              global benchmarks with innovation, performance, and design. Our
              flagship model <span className="text-white font-semibold">Shul</span> is a testament to futuristic engineering and sustainable power.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Founded on a vision to redefine the automotive experience,
              Vazirani integrates traditional craftsmanship with cutting-edge
              technology to build vehicles that inspire generations.
            </p>
            <button className="mt-4 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Explore Our Vision
            </button>
          </motion.div>
        </div>

        {/* Section 2: Values */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Innovation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-8 flex flex-col items-center text-center space-y-4 shadow-xl"
          >
            <FaBolt className="text-4xl text-yellow-400" />
            <h3 className="text-2xl font-bold">Innovation</h3>
            <p className="text-gray-300">
              We pioneer electric propulsion technologies to lead the automotive industry towards a sustainable and thrilling future.
            </p>
          </motion.div>

          {/* Sustainability */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-8 flex flex-col items-center text-center space-y-4 shadow-xl"
          >
            <FaLeaf className="text-4xl text-green-400" />
            <h3 className="text-2xl font-bold">Sustainability</h3>
            <p className="text-gray-300">
              Our design philosophy focuses on minimal environmental impact without compromising performance or luxury.
            </p>
          </motion.div>

          {/* Excellence */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-8 flex flex-col items-center text-center space-y-4 shadow-xl"
          >
            <FaAward className="text-4xl text-purple-400" />
            <h3 className="text-2xl font-bold">Excellence</h3>
            <p className="text-gray-300">
              Every Vazirani vehicle is handcrafted to perfection, ensuring an unparalleled driving experience and global recognition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
