import React, { ReactNode, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

interface CollapsibleProps {
    title: string;
    content: string
}

const Collapsible = ({ title, content }: CollapsibleProps) => {
  const [
    isExpanded,
    setIsExpanded
  ] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState<number | undefined>(undefined);
  
 
  const menuVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }

  

  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current?.clientHeight);
  };

  const currentHeight = isExpanded ? height : 0;
  const opacity = isExpanded ? 1 : 0

  return (
    <div className="overflow-visible px-4"
    >
      <div onClick={handleToggle} className="text-xl hover:cursor-pointer hover:text-white transition-all duration-200 ease-in">
        <h2 className="relative z-20">{title}</h2>
      </div>
      <motion.div variants={menuVariants} animate={isExpanded ? 'open' : 'closed'} transition={{ duration: 0.2, ease: "easeInOut" }}
      style={{ height: currentHeight + "px" }}
        className="transition-height duration-300 ease-in-out mt-2"
      >
        <div className="backdrop-blur-lg bg-gray-500/10 p-6" ref={ref}>
          {content}
        </div>
      </motion.div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Collapsible;
