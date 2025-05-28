import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Network Security Scanner',
    description: 'A Python-based tool for scanning network vulnerabilities and potential security threats.',
    technologies: ['Python', 'Nmap', 'Socket Programming'],
    github: 'https://github.com/yourusername/network-scanner',
    demo: 'https://demo-link.com',
  },
  {
    title: 'IT Helpdesk Dashboard',
    description: 'A web application for managing IT support tickets and tracking system issues.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/helpdesk-dashboard',
    demo: 'https://demo-link.com',
  },
  {
    title: 'Security Awareness Training',
    description: 'An interactive web platform for employee security training and phishing awareness.',
    technologies: ['React', 'TypeScript', 'Firebase'],
    github: 'https://github.com/yourusername/security-training',
    demo: 'https://demo-link.com',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub →
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-center mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 