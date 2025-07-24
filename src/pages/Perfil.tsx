import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";

const Perfil = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-sm mx-auto">
        <header className="p-4 flex items-center gap-3 border-b border-gray-200">
          <User className="h-6 w-6 text-modamix-dark" />
          <h1 className="text-xl font-bold text-modamix-dark">Meu Perfil</h1>
        </header>
        <main className="p-4 space-y-6 pb-32">
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-lg font-semibold text-modamix-dark mb-1">Nome do Usuário</h2>
              <p className="text-gray-600 text-sm mb-4">usuario@email.com</p>
              <Button className="bg-modamix-orange hover:bg-modamix-orange/90 w-full">Editar Perfil</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-modamix-dark mb-2">Informações</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Telefone: (00) 00000-0000</li>
                <li>• CPF: 000.000.000-00</li>
                <li>• Endereço: Rua Exemplo, 123</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Perfil; 