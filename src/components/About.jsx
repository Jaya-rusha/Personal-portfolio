import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive and beautiful interfaces' },
    { icon: Globe, title: 'Responsive Design', description: 'Building for all devices and screen sizes' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed and efficiency' },
  ];

  const experiences = [
    { year: '2022 - Present', role: 'Senior Full Stack Developer', company: 'Tech Company', description: 'Leading development of enterprise web applications' },
    { year: '2020 - 2022', role: 'Frontend Developer', company: 'Digital Agency', description: 'Built responsive websites for various clients' },
    { year: '2018 - 2020', role: 'Junior Developer', company: 'Startup Inc', description: 'Developed features for SaaS platform' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm a passionate developer with expertise in modern web technologies and a keen eye for design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
            <p className="text-gray-300 mb-4">
              With over 5 years of experience in web development, I've had the privilege of working on diverse projects 
              ranging from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-gray-300 mb-4">
              My journey in tech started with a curiosity about how things work on the internet, and has evolved into a 
              career focused on creating meaningful digital experiences that make a difference.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge through technical writing and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">What I Do Best</h3>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 card-hover"
                >
                  <highlight.icon className="text-purple-400 mb-2" size={24} />
                  <h4 className="text-white font-semibold mb-1">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.year}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
