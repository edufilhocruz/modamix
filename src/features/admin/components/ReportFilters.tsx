import React from "react";

const filters = ["Feira", "Período", "Expositor"];

/**
 * Filtros do relatório de desempenho.
 * Pronto para integração futura com selects dinâmicos.
 */
export const ReportFilters = React.memo(() => (
  <div className="flex gap-3 p-3 overflow-x-hidden">
    {filters.map(f => (
      <div key={f} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f4f0] pl-4 pr-4">
        <p className="text-[#181611] text-sm font-medium leading-normal">{f}</p>
      </div>
    ))}
  </div>
)); 