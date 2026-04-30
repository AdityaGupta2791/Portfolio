// Small chip used for tech tags (Projects) and skill labels (Experience).
const Tag = ({ children, className = "" }) => (
  <span
    className={`text-xs bg-surface/60 text-gray-300 px-2 py-1 rounded-lg border border-gray-700 hover:border-accent ${className}`}
  >
    {children}
  </span>
);

export default Tag;
