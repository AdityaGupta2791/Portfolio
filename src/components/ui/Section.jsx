// Page-level section wrapper. Centralizes height, padding,
// max-width and horizontal centering used by every content section.
// Text alignment is intentionally NOT set here so consumers can
// choose `text-center` or `text-left` without conflict.
const Section = ({ id, className = "", children }) => (
  <section
    id={id}
    className={`relative min-h-[100vh] px-6 py-28 max-w-6xl mx-auto ${className}`}
  >
    {children}
  </section>
);

export default Section;
