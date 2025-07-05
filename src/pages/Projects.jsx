import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project Shul",
    description:
      "India's first hypercar blending electric propulsion with aerospace engineering to deliver unmatched performance and sustainability.",
    image: "/images/pagani-2769165_1280.jpg",
  },
  {
    id: 2,
    title: "E-Platform",
    description:
      "Our modular electric architecture designed to empower the next generation of high-performance automotive innovations.",
    image: "/images/black-605334.jpg",
  },
  {
    id: 3,
    title: "Concept Vision 2030",
    description:
      "A futuristic concept redefining aerodynamics, design, and technology for a cleaner, smarter automotive world.",
    image: "/images/super-car-8718164.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-black text-white py-20 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center "
      >
        Our Signature Projects
      </motion.h2>

      {/* Projects List */}
      <div className="flex flex-col gap-24 max-w-6xl w-full px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* Project Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-3xl shadow-2xl object-cover w-full h-[400px]  hover:scale-105"
              />
            </div>

            {/* Project Text */}
            <div className="md:w-1/2 w-full space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <button className="mt-2 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition duration-300">
                View Project <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
