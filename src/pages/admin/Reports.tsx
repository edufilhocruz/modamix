import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const filters = [
  { label: "Feira", options: ["Todas", "Feira 1", "Feira 2"] },
  { label: "Período", options: ["Hoje", "3 dias", "7 dias", "14 dias", "30 dias"] },
];

const kpis = [
  { label: "Feiras", value: 8 },
  { label: "Parceiros", value: 35 },
  { label: "Expositores", value: 120 },
  { label: "Faturamento Recebido", value: 150000, type: "money" },
  { label: "Faturamento a Receber", value: 25000, type: "money" },
];

const mockData = [
  { nome: "Feira de Verão", tipo: "Feira", valor: 50000, data: "10/06/2024" },
  { nome: "Parceiro XPTO", tipo: "Parceiro", valor: 12000, data: "05/06/2024" },
  { nome: "Expositor ABC", tipo: "Expositor", valor: 8000, data: "02/06/2024" },
  { nome: "Feira de Inverno", tipo: "Feira", valor: 100000, data: "01/05/2024" },
];

function formatValue(val: number, type?: string) {
  if (type === "money") {
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
  }
  return val.toLocaleString("pt-BR");
}

const Reports = () => {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({ Feira: filters[0].options[0], Período: filters[1].options[0] });
  const [appliedFilters, setAppliedFilters] = useState(selectedFilters);

  const filteredData = mockData.filter(item =>
    (item.nome.toLowerCase().includes(search.toLowerCase()) ||
      item.tipo.toLowerCase().includes(search.toLowerCase())) &&
    (appliedFilters.Feira === "Todas" || item.nome === appliedFilters.Feira)
    // Aqui pode-se adicionar lógica para filtrar por período se os dados tiverem datas reais
  );

  function handleFilterChange(label: string, value: string) {
    setSelectedFilters(f => ({ ...f, [label]: value }));
  }

  function handleApplyFilters() {
    setAppliedFilters(selectedFilters);
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fbfbf9] pb-24" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      <div>
        {/* Header com botão de voltar e título */}
        <div className="flex items-center bg-[#fbfbf9] p-4 pb-2 justify-between">
          <button className="text-[#181810] flex size-12 shrink-0 items-center" onClick={() => window.history.back()}>
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-[#181810] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Relatórios e Métricas</h2>
        </div>
        {/* Campo de pesquisa */}
        <div className="flex max-w-[480px] px-4 pb-2 pt-4">
          <input
            type="text"
            className="w-full h-12 rounded-full bg-[#f4f4f0] text-[#181810] text-base font-medium border-none focus:ring-2 focus:ring-modamix-orange transition-shadow shadow-sm px-4"
            placeholder="Pesquisar por nome ou tipo..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {/* Filtros */}
        <h3 className="text-[#181810] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2">Filtros</h3>
        {filters.map((f, idx) => (
          <div key={f.label} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <span className="mb-1 text-[#181810] text-base font-medium">{f.label}</span>
              <div className="relative">
                <select
                  className="appearance-none w-full h-12 pl-4 pr-10 rounded-full bg-[#f4f4f0] text-[#181810] text-base font-medium border-none focus:ring-2 focus:ring-modamix-orange transition-shadow shadow-sm"
                  value={selectedFilters[f.label]}
                  onChange={e => handleFilterChange(f.label, e.target.value)}
                >
                  {f.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a865c]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </label>
          </div>
        ))}
        {/* Botão aplicar filtros */}
        <div className="flex max-w-[480px] px-4 pb-2">
          <button
            className="w-full h-12 rounded-full bg-modamix-orange text-white text-base font-bold shadow-sm transition hover:bg-orange-600"
            onClick={handleApplyFilters}
          >
            Aplicar Filtros
          </button>
        </div>
        {/* Indicadores */}
        <h3 className="text-[#181810] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Indicadores</h3>
        <div className="flex flex-wrap gap-4 p-4">
          {/* Linha dos indicadores pequenos */}
          {kpis.filter(k => !["Faturamento Recebido", "Faturamento a Receber"].includes(k.label)).map(kpi => (
            <div key={kpi.label} className="flex min-w-[158px] max-w-[220px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#e2e1d4] bg-white">
              <p className="text-[#181810] text-base font-medium leading-normal">{kpi.label}</p>
              <p className="text-[#181810] tracking-light text-2xl font-bold leading-tight break-words">{formatValue(kpi.value, kpi.type)}</p>
            </div>
          ))}
          {/* Card Faturamento Recebido em linha separada */}
          <div className="w-full">
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#e2e1d4] bg-white w-full">
              <p className="text-[#181810] text-base font-medium leading-normal">Faturamento Recebido</p>
              <p className="text-[#181810] tracking-light text-2xl font-bold leading-tight break-words">{formatValue(kpis.find(k => k.label === "Faturamento Recebido")?.value ?? 0, 'money')}</p>
            </div>
          </div>
          {/* Card Faturamento a Receber em linha separada */}
          <div className="w-full">
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#e2e1d4] bg-white w-full">
              <p className="text-[#181810] text-base font-medium leading-normal">Faturamento a Receber</p>
              <p className="text-[#181810] tracking-light text-2xl font-bold leading-tight break-words">{formatValue(kpis.find(k => k.label === "Faturamento a Receber")?.value ?? 0, 'money')}</p>
            </div>
          </div>
        </div>
        {/* Botões de exportação */}
        <div className="flex gap-3 px-4 py-3">
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#f3f1dc] text-[#181810] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Exportar PDF</span>
          </button>
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#f3f1dc] text-[#181810] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Exportar Planilha</span>
          </button>
        </div>
        {/* Tabela de dados */}
        <div className="px-4 pb-8">
          <div className="overflow-x-auto rounded-xl border border-[#e2e1d4] bg-white">
            <table className="min-w-full text-left text-[#181810] text-base">
              <thead>
                <tr className="bg-[#f4f4f0]">
                  <th className="px-4 py-3 font-bold">Nome</th>
                  <th className="px-4 py-3 font-bold">Tipo</th>
                  <th className="px-4 py-3 font-bold">Valor</th>
                  <th className="px-4 py-3 font-bold">Data</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-[#8a865c]">Nenhum resultado encontrado.</td>
                  </tr>
                ) : (
                  filteredData.map((item, idx) => (
                    <tr key={idx} className="border-t border-[#f4f4f0]">
                      <td className="px-4 py-3">{item.nome}</td>
                      <td className="px-4 py-3">{item.tipo}</td>
                      <td className="px-4 py-3">{formatValue(item.valor, 'money')}</td>
                      <td className="px-4 py-3">{item.data}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 