import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  color?: string;
};

export const Badge = ({ children, color = "bg-primary text-white" }: BadgeProps) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${color}`}>{children}</span>
); 