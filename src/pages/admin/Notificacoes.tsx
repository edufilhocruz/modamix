import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const radioOptions = [
  { label: "E-mail", value: "email" },
  { label: "Notificação do app", value: "app" },
  { label: "WhatsApp", value: "whatsapp" },
];

const AdminNotificacoes = () => {
  const [metodo, setMetodo] = useState("email");
  const [mensagem, setMensagem] = useState("");

  const handleSend = () => {
    // Simula envio
    console.log("Mensagem:", mensagem);
    console.log("Método:", metodo);
    setMensagem("");
    setMetodo("email");
    alert("Notificação enviada!");
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fcfbf8]" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#fcfbf8] p-4 pb-2 justify-between">
          <button className="text-[#1c1b0d] flex size-12 shrink-0 items-center" onClick={() => window.history.back()}>
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-[#1c1b0d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Gerar Notificações</h2>
        </div>
        {/* Método de envio */}
        <h3 className="text-[#1c1b0d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Método de envio</h3>
        <div className="flex flex-col gap-3 p-4">
          {radioOptions.map(opt => (
            <label key={opt.value} className="flex items-center gap-4 rounded-xl border border-solid border-[#e8e6ce] p-[15px] flex-row-reverse">
              <input
                type="radio"
                className={
                  `h-5 w-5 border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0
                  ${metodo === opt.value ? 'border-modamix-orange checked:bg-modamix-orange' : 'border-[#e8e6ce]'}
                  rounded-full transition-colors`
                }
                name="metodo-envio"
                checked={metodo === opt.value}
                onChange={() => setMetodo(opt.value)}
                style={metodo === opt.value ? { accentColor: '#ff7a00' } : { accentColor: '#e8e6ce' }}
              />
              <div className="flex grow flex-col"><p className="text-[#1c1b0d] text-sm font-medium leading-normal">{opt.label}</p></div>
            </label>
          ))}
        </div>
        {/* Mensagem */}
        <h3 className="text-[#1c1b0d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Mensagem</h3>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="Digite sua mensagem"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c1b0d] focus:outline-0 focus:ring-0 border border-[#e8e6ce] bg-[#fcfbf8] focus:border-[#e8e6ce] min-h-36 placeholder:text-[#9c9549] p-[15px] text-base font-normal leading-normal"
              value={mensagem}
              onChange={e => setMensagem(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-modamix-orange text-white text-base font-bold leading-normal tracking-[0.015em]"
            onClick={handleSend}
            disabled={!mensagem.trim()}
          >
            <span className="truncate">Enviar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNotificacoes; 