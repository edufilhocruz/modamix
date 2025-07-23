import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ModaMixHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-modamix-dark">Olá, Maria!</h1>
      <div className="flex items-center space-x-4">
        <Bell 
          className="w-6 h-6 text-modamix-dark cursor-pointer hover:text-modamix-orange transition-colors" 
          onClick={() => navigate('/notificacoes')}
        />
      </div>
    </header>
  );
};