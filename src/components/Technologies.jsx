import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { DiJavascript, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
        >
          <DiJavascript className="text-7xl" style={{ color: "rgb(251, 215, 37)" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          initial="initial"
        >
          <SiTailwindcss className="text-7xl" style={{ color: "rgb(56, 189, 248)" }} />
        </motion.div>
        {/* <motion.div
          variants={iconVariants(3)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div> */}
        <motion.div
          variants={iconVariants(5)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <SiMongodb className="text-7xl" style={{ color: "rgb(0, 237, 100)" }} />
        </motion.div>
        {/* <motion.div
          variants={iconVariants(2)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div> */}
        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <FaNodeJs className="text-7xl" style={{ color: "rgb(95, 160, 78)" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <FaGitAlt className="text-7xl" style={{ color: "rgb(240, 80, 51)" }} />
        </motion.div>
        {/* <motion.div
          variants={iconVariants(4)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-500" />
        </motion.div> */}
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <SiMysql className="text-7xl"  style={{ color: "rgb(0, 117, 143)" }}/>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          initial="initial"
          className="p-4"
        >
          <IoLogoGithub className="text-7xl"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
