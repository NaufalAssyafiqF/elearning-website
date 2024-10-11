import { motion } from "framer-motion";
import { useState } from "react";
const NavbarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    isOpen && (
      <motion.div
        className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Are you a university or school student for an online tutoring
        partnership?{" "}
        <a href="#" className="text-secondary ml-2">
          talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          x
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
