import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const fairsData = [
  {
    title: "Moda Inverno 2025",
    date: "20 a 23 de Junho de 2025"
  },
  {
    title: "Outlet de Fim de Ano",
    date: "05 a 08 de Dezembro de 2024"
  }
];

export const FutureFairs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="text-lg font-semibold text-modamix-dark mb-4">Feiras Futuras</h3>
      <div className="space-y-4">
        {fairsData.map((fair, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
            <div>
              <h4 className="font-bold text-modamix-dark">{fair.title}</h4>
              <p className="text-sm text-gray-500">{fair.date}</p>
            </div>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold"
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