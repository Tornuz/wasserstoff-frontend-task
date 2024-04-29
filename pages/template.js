import { motion } from "framer-motion";

export default function Template({children}) {
    // Adding transitions to every routes
    return(
        <motion.div 
        initial={{y: 20, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{ease: 'easeInOut', duration: 1}}
        >
            {children}
        </motion.div>
    )
}