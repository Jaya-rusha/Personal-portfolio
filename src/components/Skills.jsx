import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'Vue.js', level: 85, color: 'bg-green-500' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Express.js', level: 85, color: 'bg-gray-600' },
        { name: 'MongoDB', level: 75, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 70, color: 'bg-blue-700' },
        { name: 'REST APIs', level: 90, color: 'bg-purple-500' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'bg-red-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-400' },
        { name: 'AWS', level: 70, color: 'bg-orange-600' },
        { name: 'Figma', level: 80, color: 'bg-purple-600' },
        { name: 'Webpack', level: 75, color: 'bg-blue-600' },
        { name: 'Jest', level: 80, color: 'bg-red-600' },
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: '📝' },
    { name: 'Git', icon: '🔀' },
    { name: 'Chrome DevTools', icon: '🔍' },
    { name: 'Postman', icon: '📮' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Netlify', icon: '🌐' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I work with daily.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center card-hover border border-white/20"
              >
                <span className="text-2xl mb-2">{tool.icon}</span>
                <span className="text-gray-300 text-sm text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices. 
              Currently exploring advanced React patterns, cloud architecture, and machine learning applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
