import React from "react";

/**
 * Badge visual para destaques e níveis.
 * Usar React.memo para performance.
 */
export const Badge = React.memo(({ children, color = "bg-primary text-white" }: { children: React.ReactNode; color?: string }) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${color}`}>{children}</span>
)); 