import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const fairsData = [
  {
    title: "FEIRÃO MODA MIX | ENGENHÃO",
    date: "15 a 18 de Janeiro de 2025",
    location: "Estádio Nilton Santos - Engenho de Dentro",
    status: "Inscrições Abertas"
  },
  {
    title: "FEIRÃO MODA MIX | BARRA OLÍMPICA",
    date: "22 a 25 de Janeiro de 2025",
    location: "Parque Olímpico - Barra da Tijuca",
    status: "Em Breve"
  },
  {
    title: "FEIRÃO MODA MIX | DELCASTILHO",
    date: "29 de Janeiro a 01 de Fevereiro de 2025",
    location: "Shopping DelCastilho - DelCastilho",
    status: "Em Breve"
  },
  {
    title: "FEIRÃO MODA MIX | ROCINHA",
    date: "05 a 08 de Fevereiro de 2025",
    location: "Rocinha - Zona Sul",
    status: "Em Breve"
  }
];

export const FutureFairs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="text-lg font-semibold text-modamix-dark mb-4">Feiras Futuras</h3>
      <div className="space-y-3">
        {fairsData.map((fair, index) => (
          <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-bold text-modamix-dark text-sm mb-1">{fair.title}</h4>
                <p className="text-xs text-gray-600 mb-1">{fair.location}</p>
                <p className="text-xs text-gray-500">{fair.date}</p>
              </div>
              <div className="ml-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  fair.status === "Inscrições Abertas" 
                    ? "bg-modamix-yellow text-modamix-dark" 
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {fair.status}
                </span>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-modamix-orange text-modamix-orange hover:bg-modamix-orange hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              onClick={() => navigate("/feiras")}
            >
              Saber mais
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};