"use client"
import { animate, motion} from "framer-motion"

const RotatingShape = ({content, direction, duration}) => {
    // define the rotation animation
    const rotationAnimation = {
        animate: {
            //rotation 360 degrees based on the direction
            rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
            transition: {
                duration: duration, // duration of one ful rotation
                repeat: Infinity, // repeat the rotation infinitely
                ease: "linear" // smooth rotation
            }
        }
    }
  return (
    <motion.div variants={rotationAnimation} animate="animate">
        {content}
    </motion.div>
  )
}

export default RotatingShape