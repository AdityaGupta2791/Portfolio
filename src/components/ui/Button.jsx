// Polymorphic button supporting two variants × two sizes.
// `as` accepts a string ("a", "button") or a component
// (e.g. `motion.a`) — the latter enables Framer hover springs.
const variants = {
  primary:
    "text-black font-semibold bg-gradient-to-r from-accent-strong to-accent-light shadow-glow-accent-bright hover:shadow-glow-accent-brightest hover:scale-[1.03] active:scale-[0.98] transition-all duration-300",
  outline:
    "font-semibold border-2 border-accent-strong/60 backdrop-blur-sm hover:border-accent hover:scale-[1.03] active:scale-[0.98] transition-all duration-300",
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
