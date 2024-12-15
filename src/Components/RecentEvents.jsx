import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


const events = [
  {
    title: "TechFest 2024",
    date: "March 30, 2024",
    location: "Tech Campus, Main Hall",
    description: "A day-long celebration of technology with keynotes, workshops, and networking opportunities.",
    image: "https://th.bing.com/th/id/OIP.DM7zikvwD2khBvp42QA8QwHaEK?rs=1&pid=ImgDetMain",
  },
  {
    title: "Flutter Forward",
    date: "January 15, 2024",
    location: "Online",
    description: "Dive into Flutter’s latest updates and build cross-platform apps faster than ever.",
    image: "https://th.bing.com/th/id/OIP.zDSl1UO7dySsq-Fhe7YGPgHaD0?rs=1&pid=ImgDetMain",
  },
  {
    title: "AI/ML Bootcamp",
    date: "February 5, 2024",
    location: "GDG Community Hub",
    description: "A beginner-friendly workshop exploring the fundamentals of AI/ML with hands-on projects.",
    image: "https://www.sigmasolve.com/wp-content/uploads/2023/02/AI-ML-Benefits-img.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function RecentEvents() {
  const [ref, controls] = useScrollAnimation(); // Reusable scroll animation hook

  return (
    <section className="py-16 bg-gradient-to-b from-white via-indigo-50 to-gray-100 text-lg">
      <div className="container mx-auto px-4">
        {/* ye seaction ka header part*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Recent Events
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Relive the highlights from our latest events that brought the developer community together.
          </p>
        </motion.div>
        {/* ye seaction ka box vala part*/}
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm px-4 py-2 absolute bottom-0">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-sm text-indigo-600">{event.date}</p>
                <p className="text-gray-500 text-sm mt-2">{event.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
