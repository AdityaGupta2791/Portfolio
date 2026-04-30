import { motion } from "framer-motion";

// Shared dark-glass surface with the orange hover glow.
// Polymorphic via `as` so the same look works for div / a / form.
// Padding is intentionally NOT included — consumers pass it
// explicitly (p-6, p-8, or none for image-edge cards).
const baseClass =
  "bg-[#0D1117]/70 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400";

const Card = ({
  as = "div",
  className = "",
  whileHover = { scale: 1.03 },
  transition = { type: "spring", stiffness: 200, damping: 12 },
  children,
  ...rest
}) => {
  const Component = motion[as];
  return (
    <Component
      whileHover={whileHover}
      transition={transition}
      className={`${baseClass} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;
