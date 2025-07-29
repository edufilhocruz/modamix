import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { NotificacaoTabs } from "../components/NotificacaoTabs";
import { NotificacaoList } from "../components/NotificacaoList";

/**
 * Página de Notificações, com header, tabs e lista de notificações.
 * Layout e UX igual ao modelo HTML fornecido.
 */
const Notificacoes = () => {
  const [active, setActive] = useState("Alerta");
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <div>
        {/* Header com botão de voltar e título */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <button className="text-[#181611] flex size-12 shrink-0 items-center" onClick={() => window.history.back()}>
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Notificações</h2>
        </div>
        {/* Tabs de categoria */}
        <NotificacaoTabs active={active} onChange={setActive} />
        {/* Lista de notificações filtrada */}
        <NotificacaoList active={active} />
      </div>
    </div>
  );
};

export default Notificacoes; 