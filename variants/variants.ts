import { Variants } from "framer-motion"

export const components_variants: Variants = {

    visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.85,
            /* x: 500 */
        }
}



export const service_variants: Variants = {

    visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.85,
            /* x: 500 */
        }
}


export const banner_variants: Variants = {
    initial: {
        y: -1000
    },

    animate: {
        y:0,
        transition: {
            delay: 0.3,
            duration: 0.8,
            type: "spring",
        },
    },
};

export const banner_animation_variants: Variants = {
    initial: {},

    animate: {
        y: [30, 0, 30],
        transition: {
            duration: 2.6,
            ease: "linear",
            repeat: Infinity,
        },
    },
};

export const fadeInUp = (direction:"up" |"down" = "up") : Variants => {
    return {
        initial: {
            y: direction === "up" ? 40 : -60,
            opacity: 0,
        },
    
        animate: {
            y: 0,
            opacity: 1,
    
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };
};


export const drag_variants = (mouseXPosition, mouseYPosition):  Variants => {

    return {
    
    default: {
        opacity: 1,
        height: 10,
        width: 10,
        fontSize: "16px",
        backgroundColor: "#ff070700",
        x: mouseXPosition,
        y: mouseYPosition,
        transition: {
            type: "spring",
            mass: 0.6
        }
    },

    service: {
        opacity: 1,
        backgroundColor: "#33333380",
        color: "#ffffff",
        height: 80,
        width: 80,
        fontSize: "18px",
        x: mouseXPosition,
        y: mouseYPosition
    },

    contact: {
        opacity: 1,
        backgroundColor: "#ff00003b",
        color: "#000",
        height: 64,
        width: 64,
        fontSize: "32px",
        x: mouseXPosition - 48,
        y: mouseYPosition - 48
      }
    }
};
