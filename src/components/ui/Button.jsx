// Polymorphic button supporting two variants × two sizes.
// `as` accepts a string ("a", "button") or a component
// (e.g. `motion.a`) — the latter enables Framer hover springs.
const variants = {
  primary:
    "text-black font-semibold bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_20px_rgba(255,140,0,0.25)] hover:shadow-[0_0_30px_rgba(255,140,0,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300",
  outline:
    "font-semibold border-2 border-orange-500/60 backdrop-blur-sm hover:border-orange-400 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300",
};

const sizes = {
  lg: "inline-block px-7 py-3 text-lg rounded-xl",
  sm: "inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md",
};

const Button = ({
  as: Component = "a",
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...rest
}) => (
  <Component
    className={`${sizes[size]} ${variants[variant]} ${className}`}
    {...rest}
  >
    {children}
  </Component>
);

export default Button;
