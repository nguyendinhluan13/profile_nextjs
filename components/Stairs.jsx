import { motion } from "framer-motion";
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

//calculate the reverse index fot stoggred delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              delay: reverseIndex(index) * 0.1,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-white relative"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
