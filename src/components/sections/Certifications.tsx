import { motion } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    logo: "/certifications/comptia.png",
    link: "https://www.comptia.org/certifications/security"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "2024",
    logo: "/certifications/google.png",
    link: "https://www.coursera.org/google-certificates/google-cybersecurity"
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark dark:text-light mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-dark dark:text-light">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Issued: {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                >
                  View Certificate
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 