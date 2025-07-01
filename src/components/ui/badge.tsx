export const Badge = ({ children, className = "" }) => (
  <span className={`inline-block rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);
