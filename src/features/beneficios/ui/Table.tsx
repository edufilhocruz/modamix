import React from "react";

/**
 * Table visual genérica para exibir dados tabulares.
 * Usar React.memo para performance.
 */
export const Table = React.memo(({ headers, rows, className = "" }: { headers: string[]; rows: React.ReactNode[]; className?: string }) => (
  <table className={`w-full text-sm ${className}`}>
    <thead>
      <tr>
        {headers.map((h, i) => (
          <th key={i} className="font-semibold text-left py-1 pr-2">{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
)); 