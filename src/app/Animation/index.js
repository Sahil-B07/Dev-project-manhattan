export const headText = {
  hidden: { opacity: 0, y: 30, rotateX: 90 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
};

export const headPara = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
};

export const typeWriter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: 0.5, type: "spring", stiffness: 250 },
  },
};
