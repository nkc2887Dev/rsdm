import React from "react";
import clsx from "clsx"; // For conditional styling

const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
  
  const variants = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    danger: "bg-red-200 text-red-800",
    warning: "bg-yellow-200 text-yellow-800",
    info: "bg-blue-200 text-blue-800",
  };

  return <span className={clsx(baseStyles, variants[variant], className)}>{children}</span>;
};

export default Badge;