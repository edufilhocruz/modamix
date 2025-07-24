import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white rounded-lg shadow p-4 ${className}`}>{children}</div>
); 