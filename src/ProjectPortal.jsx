import { motion } from 'framer-motion';

export default function ProjectPortal({ name, icon, position }) {
  return (
    <motion.div 
      className="portal"
      style={{ top: position.top, left: position.left }}
      whileHover={{ scale: 1.1 }} // Simple feedback when hovering
    >
      <img src={icon} alt={name} className="cloud-icon" />
      <span className="label">{name}</span>
    </motion.div>
  );
}