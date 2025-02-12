import { motion } from "motion/react";
function AboutBox({ title, children, transitionWay }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: transitionWay === "right" ? "100%" : "-100%",
      }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="backdrop-blur-lg bg-[#686868] bg-opacity-20 text-white  py-11  divide-y-2 divide-white divide-opacity-20 rounded-xl overflow-hidden"
    >
      <p className="mb-4 px-8 text-2xl font-b ">{title}</p>

      {children}
    </motion.div>
  );
}

export default AboutBox;
