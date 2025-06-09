import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-center mb-12">About Me</h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-sm text-gray-600 dark:text-gray-300">
                about.txt
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono">
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="text-primary">$</span> whoami
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  I'm Elene Mchedlidze a 17 year old Full Stack Web Developer from Georgia 🇬🇪.
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="text-primary">$</span> location
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Based in Tbilisi, Georgia
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="text-primary">$</span> goals
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  Building scalable web applications and contributing to open-source projects.
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="text-primary">$</span> certifications
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  • Full Stack Web Development Certification
                  <br />
                  • React Advanced Concepts
                  <br />
                  • Node.js & Express.js
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 