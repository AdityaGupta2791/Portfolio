// Small chip used for tech tags (Projects) and skill labels (Experience).
const Tag = ({ children, className = "" }) => (
  <span
    className={`text-xs bg-surface/60 text-body px-2 py-1 rounded-lg border border-border hover:border-accent ${className}`}
  >
    {children}
  </span>
);

export default Tag;
