import { AnimatePresence, motion } from "motion/react";
import Image from "../../components/Image";
function PortfolioImage({ isVisable, setIsVisable }) {
  return (
    <div
      onMouseEnter={() => setIsVisable(true)}
      onMouseLeave={() => setIsVisable(false)}
      className="absolute bottom-0 flex justify-center   "
    >
      <Image
        className="w-full  sm:w-[600px] sm:h-[700px] "
        src="/public/IMG_3986_2_-removebg.png"
      />

      <div className=" w-full h-[400px] sm:w-[600px] sm:h-[600px] md:w-[600px] md:h-[600px] bg-orange-secondary absolute -bottom-1/2  right-1/2 translate-x-1/2 rounded-full -z-10"></div>

      <AnimatePresence>
        {isVisable ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ scale: 0 }}
            className="absolute  -z-10 w-full   sm:w-[700px] md:w-[900px] bottom-0 md:-left-48 overflow-hidden    "
          >
            <img
              src="/Hovere-image-background.png"
              className="  sm:w-full object-cover"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default PortfolioImage;
