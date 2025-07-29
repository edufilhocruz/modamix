import React from "react";
import { useNavigate } from "react-router-dom";

const feirasMock = [
  {
    nome: "FEIRÃO MODA MIX | ENGENHÃO - ESTÁDIO NILTON SANTOS",
    data: "2024-07-10",
    endereco: "Rua José dos Reis, 425, Engenho de Dentro, Rio de Janeiro - RJ",
    pagantes: 42,
    faltamPagar: 8
  },
  {
    nome: "FEIRÃO MODA MIX | BARRA OLÍMPICA – PARQUE RITA LEE",
    data: "2024-05-15",
    endereco: "Av. Embaixador Abelardo Bueno, 3401, Barra da Tijuca, Rio de Janeiro - RJ",
    pagantes: 30,
    faltamPagar: 5
  },
  {
    nome: "FEIRÃO MODA MIX | DELCASTILHO",
    data: "2024-03-01",
    endereco: "Av. Dom Hélder Câmara, 5474, Del Castilho, Rio de Janeiro - RJ",
    pagantes: 55,
    faltamPagar: 2
  },
  {
    nome: "FEIRÃO MODA MIX | ROCINHA",
    data: "2023-11-20",
    endereco: "Estr. da Gávea, 486, Rocinha, Rio de Janeiro - RJ",
    pagantes: 28,
    faltamPagar: 4
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

const AdminFeiras = () => {
  const navigate = useNavigate();
  // Ordena da mais recente para a mais antiga
  const feiras = [...feirasMock].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <div className="relative flex flex-col min-h-screen bg-[#fbfbf9] pb-24" style={{ fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif' }}>
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold text-[#181810]">Feiras</h1>
        <button
          className="rounded-full bg-modamix-orange text-white font-bold px-5 h-12 text-base shadow-sm hover:bg-orange-600 transition"
          onClick={() => navigate('/admin/feiras/criar')}
        >
          Criar Feira
        </button>
      </div>
      <div className="flex flex-col gap-4 px-4 pt-2">
        {feiras.map((f, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-xl p-4 bg-white border border-[#e2e1d4]">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-[#181810]">{f.nome}</span>
              <span className="text-sm text-[#888163]">{formatDate(f.data)}</span>
            </div>
            <span className="text-base text-[#181810]">{f.endereco}</span>
            <div className="flex gap-4 pt-1">
              <span className="text-sm text-green-700 font-semibold">Pagantes: {f.pagantes}</span>
              <span className="text-sm text-red-600 font-semibold">Faltam pagar: {f.faltamPagar}</span>
            </div>
          </div>
        ))}
        {feiras.length === 0 && (
          <div className="text-[#888163] text-center py-8">Nenhuma feira cadastrada.</div>
        )}
      </div>
    </div>
  );
};

export default AdminFeiras; 