import { motion } from "framer-motion";

// Renders the standard section title + optional subtitle.
// Replaces the previous pattern where a <p> was nested inside <h2>
// (invalid HTML that browsers silently auto-corrected).
const SectionHeader = ({ title, subtitle, className = "mb-12" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    <h2 className="text-4xl font-bold text-orange-400">{title}</h2>
    {subtitle && (
      <p className="text-gray-300 text-lg mt-3">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeader;
