import React from "react";

const tabs = ["Alerta", "Lembrete", "Pagamento", "Documentos"];

/**
 * Abas para filtrar categorias de notificações.
 * Usa estado local para controle da aba ativa.
 */
export const NotificacaoTabs = React.memo(({ active, onChange }: { active: string; onChange: (tab: string) => void }) => (
  <div className="flex border-b border-[#e5e4dc] px-4 gap-8 pb-3">
    {tabs.map(tab => (
      <button
        key={tab}
        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${active === tab ? 'border-b-[#181611] text-[#181611]' : 'border-b-transparent text-[#888163]'}`}
        onClick={() => onChange(tab)}
      >
        <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${active === tab ? 'text-[#181611]' : 'text-[#888163]'}`}>{tab}</p>
      </button>
    ))}
  </div>
)); 