import React, { useState } from "react";
import { X } from "lucide-react";

const IMG_PLACEHOLDER = "https://lh3.googleusercontent.com/aida-public/AB6AXuCLEKLW_R0w-Qf0CtdF2dZ2z3DtLMnQ-TWiL0jOafZ2rh0wFxxXNOR9Lo51b1FDfUMnQ3Z_Ovv0x0YHlSI_RQhu3M8H2fDcZ_R6CYk1oelm7iDO4AHtsdnu4qfEta9LJ8b56tmrAyehBa-zQo9cSa4nf0skqAcKFgclE0FOIpWLBuLBBi9Zgql6knaXs5AN3YFB8mQvPMv8A8BgIh2mUOOMu5vaGi-TrEr_PeRRfoq1Yq5RlYR9pcSy6lL8fiS9P_0M1au9az4N57w";

function formatBRL(value: string) {
  const onlyNums = value.replace(/\D/g, "");
  const num = parseFloat(onlyNums) / 100;
  if (isNaN(num)) return "";
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function maskCep(value: string) {
  const v = value.replace(/\D/g, "").slice(0, 8);
  if (v.length <= 5) return v;
  return v.slice(0, 5) + '-' + v.slice(5);
}

const FeirasCriar = () => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [loadingCep, setLoadingCep] = useState(false);
  const [enderecoBuscado, setEnderecoBuscado] = useState(false);

  async function buscarEndereco() {
    const cepNumeros = cep.replace(/\D/g, "");
    if (cepNumeros.length < 8) return;
    setLoadingCep(true);
    try {
      const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${cepNumeros}`);
      if (!res.ok) throw new Error("CEP não encontrado");
      const data = await res.json();
      setRua(data.street || "");
      setBairro(data.neighborhood || "");
      setCidade(data.city || "");
      setEstado(data.state || "");
      setEnderecoBuscado(true);
    } catch {
      setRua(""); setBairro(""); setCidade(""); setEstado(""); setEnderecoBuscado(false);
      alert("CEP não encontrado");
    } finally {
      setLoadingCep(false);
    }
  }

  function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, "").slice(0, 8);
    setCep(maskCep(value));
    setEnderecoBuscado(false);
  }

  function handleValorChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, "");
    setValor(formatBRL(raw));
  }

  // Monta endereço para o mapa
  const enderecoCompleto = rua && cidade && estado ? `${rua}, ${numero}, ${bairro}, ${cidade} - ${estado}` : "";
  const mapaUrl = enderecoCompleto ? `https://www.google.com/maps?q=${encodeURIComponent(enderecoCompleto)}&output=embed` : undefined;

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fbfbf9] pb-24" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#fbfbf9] p-4 pb-2 justify-between">
          <button className="text-[#181810] flex size-12 shrink-0 items-center" onClick={() => window.history.back()}>
            <X size={24} />
          </button>
          <h2 className="text-[#181810] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Criar feira</h2>
        </div>
        {/* Nome da feira */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Nome da feira"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </label>
        </div>
        {/* Valor */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Valor"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
              value={valor}
              onChange={handleValorChange}
              inputMode="numeric"
            />
          </label>
        </div>
        {/* CEP + Buscar Endereço */}
        <div className="flex max-w-[480px] items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="CEP"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
              value={cep}
              onChange={handleCepChange}
              maxLength={9}
              inputMode="numeric"
            />
          </label>
          <button
            type="button"
            className="h-12 px-5 rounded-full bg-modamix-orange text-white font-bold text-base disabled:opacity-60"
            onClick={buscarEndereco}
            disabled={cep.replace(/\D/g, "").length !== 8 || loadingCep}
          >
            {loadingCep ? "Buscando..." : "Buscar Endereço"}
          </button>
        </div>
        {/* Endereço preenchido automaticamente */}
        {enderecoBuscado && (
          <>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Rua"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
                  value={rua}
                  disabled
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Número"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
                  value={numero}
                  onChange={e => setNumero(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Bairro"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
                  value={bairro}
                  disabled
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Cidade"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
                  value={cidade}
                  disabled
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-1">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Estado"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181810] focus:outline-0 focus:ring-0 border-none bg-[#f1f0ea] focus:border-none h-14 placeholder:text-[#8a865c] p-4 text-base font-normal leading-normal"
                  value={estado}
                  disabled
                />
              </label>
            </div>
            {/* Mapa */}
            <div className="flex px-4 py-3">
              {mapaUrl ? (
                <iframe
                  title="Mapa da feira"
                  src={mapaUrl}
                  className="w-full aspect-video rounded-xl border-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                  style={{ backgroundImage: `url('${IMG_PLACEHOLDER}')` }}
                ></div>
              )}
            </div>
          </>
        )}
      </div>
      <div>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-modamix-orange text-white text-base font-bold leading-normal tracking-[0.015em]"
            onClick={e => { e.preventDefault(); alert('Feira criada! (mock)'); }}
          >
            <span className="truncate">Criar Feira</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeirasCriar;