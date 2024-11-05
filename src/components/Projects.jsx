import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3"
              // className="w-full lg:w-1/4"
            >
              <a
                // href="https://react-firebase-chat-aadi.vercel.app/"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={project.image}
                    // width={250}
                    width={350}
                    // height={250}
                    height={300}
                    alt={project.title}
                    className="mt-2 mb-6 rounded transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href={project.link}>
              <h3 className="mb-2 font-semibold text-2xl hover:text-sky-700 hover:underline">{project.title}</h3>
              </a>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
