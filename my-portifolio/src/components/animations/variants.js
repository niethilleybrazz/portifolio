export const fadeUp = {

    hidden:{
        opacity:0,
        y:80,
    },

    visible:{
        opacity:1,
        y:0,

        transition:{
            duration:.8,
            ease:"easeOut",
        }
    }

}
export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.4,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
    },
  },
};

export const container = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};