import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define your skills with logo, name, and level
const skills = [
  { name: 'React', logo: '/logos/react.svg', level: 'High' },
  { name: 'TypeScript', logo: '/logos/typescript.svg', level: 'High' },
  { name: 'JavaScript', logo: '/logos/javascript.svg', level: 'High' },
  { name: 'Node.js', logo: '/logos/nodejs.svg', level: 'High' },
  { name: 'Express.js', logo: '/logos/expressjs.svg', level: 'Mid' },
  { name: 'Next.js', logo: '/logos/nextjs.svg', level: 'Mid' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg', level: 'High' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg', level: 'Mid' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg', level: 'Mid' },
  { name: 'HTML5', logo: '/logos/html.svg', level: 'High' },
  { name: 'CSS3', logo: '/logos/css.svg', level: 'High' },
  { name: 'Git', logo: '/logos/git.svg', level: 'High' },
  { name: 'Docker', logo: '/logos/docker.svg', level: 'Low' },
];

const levelColors = {
  Low: 'bg-gray-200 text-gray-700',
  Mid: 'bg-yellow-200 text-yellow-800',
  High: 'bg-green-200 text-green-800',
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              whileHover={{
                scale: 1.07,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                transition: { duration: 0.15, delay: 0 }
              }}
            >
              <img
                src={skill.logo}
                alt={skill.name + ' logo'}
                className="w-12 h-12 mb-4 object-contain"
                loading="lazy"
              />
              <span className="font-semibold text-lg mb-2 text-center">{skill.name}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[skill.level as keyof typeof levelColors]}`}>{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 