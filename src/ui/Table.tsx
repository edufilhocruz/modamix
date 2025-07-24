import React from "react";

type TableProps = {
  headers: string[];
  rows: React.ReactNode[];
  className?: string;
};

export const Table = ({ headers, rows, className = "" }: TableProps) => (
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
); 