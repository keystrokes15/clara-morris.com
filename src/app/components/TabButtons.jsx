import React from "react";
import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
}

const TabButtons = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white' : 'text-zinc-400';

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div 
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-cyan-500 bg-opacity-90 mr-3">
      </motion.div>
    </button>
  )
}

export default TabButtons