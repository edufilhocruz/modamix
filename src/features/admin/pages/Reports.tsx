import React from "react";
import { ArrowLeft } from "lucide-react";
import { ReportFilters } from "../components/ReportFilters";
import { ReportStats } from "../components/ReportStats";

/**
 * Página de relatórios/desempenho administrativa.
 * Composição modular, pronta para integração com backend.
 */
const Reports = () => (
  <div className="relative flex min-h-screen flex-col bg-white">
    <div>
      {/* Header com botão de voltar e título */}
      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <button className="text-[#181611] flex size-12 shrink-0 items-center" onClick={() => window.history.back()}>
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Desempenho</h2>
      </div>
      {/* Filtros */}
      <h3 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Filtros</h3>
      <ReportFilters />
      {/* Indicadores */}
      <ReportStats />
      {/* Botão de exportar CSV */}
      <div className="flex px-4 py-3">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#f4f4f0] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Exportar CSV</span>
        </button>
      </div>
    </div>
  </div>
);

export default Reports; 