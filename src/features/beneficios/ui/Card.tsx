import React from "react";

/**
 * Card visual genérico para agrupar conteúdo.
 * Usar React.memo para performance.
 */
export const Card = React.memo(({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg shadow p-4 ${className}`}>{children}</div>
)); 