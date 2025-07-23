import { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Box {
  id: string;
  number: number;
  available: boolean;
  reserved: boolean;
  size: "pequeno" | "medio" | "grande";
  position: { x: number; y: number };
}

const generateBoxes = (): Box[] => {
  const boxes: Box[] = [];
  let id = 1;
  
  // Gerar boxes em um grid 8x6
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      const isAvailable = Math.random() > 0.3; // 70% disponíveis
      boxes.push({
        id: `box-${id}`,
        number: id,
        available: isAvailable,
        reserved: !isAvailable,
        size: Math.random() > 0.7 ? "grande" : Math.random() > 0.4 ? "medio" : "pequeno",
        position: { x: col, y: row }
      });
      id++;
    }
  }
  
  return boxes;
};

const MapaEspacos = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);
  const [boxes] = useState<Box[]>(generateBoxes());

  const handleBoxClick = (box: Box) => {
    if (box.available) {
      setSelectedBox(box);
    }
  };

  const handleReservar = () => {
    if (selectedBox) {
      navigate('/pre-checkout', { 
        state: { 
          box: selectedBox,
          feira: "Moda Verão 2024",
          preco: 120
        }
      });
    }
  };

  const getBoxColor = (box: Box) => {
    if (box.reserved) return "bg-red-200 border-red-400 cursor-not-allowed";
    if (selectedBox?.id === box.id) return "bg-modamix-orange border-modamix-orange text-white";
    return "bg-green-200 border-green-400 hover:bg-green-300 cursor-pointer";
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case "grande": return "w-16 h-12";
      case "medio": return "w-12 h-10";
      default: return "w-10 h-8";
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-sm mx-auto">
        <header className="p-4 flex items-center gap-3 border-b border-gray-200">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-modamix-dark" />
            <h1 className="text-xl font-bold text-modamix-dark">Espaços Disponíveis</h1>
          </div>
        </header>

        <main className="p-4 space-y-6 pb-32">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-modamix-dark mb-2">Moda Verão 2024</h3>
              <p className="text-sm text-gray-600 mb-3">Selecione o espaço desejado para sua loja</p>
              
              <div className="flex gap-4 text-xs mb-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-200 border border-green-400 rounded"></div>
                  <span>Disponível</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-200 border border-red-400 rounded"></div>
                  <span>Ocupado</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-modamix-orange rounded"></div>
                  <span>Selecionado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mapa de Boxes */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-modamix-dark mb-4">Layout do Evento</h4>
              
              <div className="overflow-x-auto">
                <div className="grid grid-cols-8 gap-2 min-w-[600px] p-4 bg-gray-50 rounded-lg">
                  {boxes.map((box) => (
                    <div
                      key={box.id}
                      className={`${getSizeClass(box.size)} ${getBoxColor(box)} border-2 rounded flex items-center justify-center text-xs font-bold transition-colors`}
                      onClick={() => handleBoxClick(box)}
                      style={{
                        gridColumn: box.position.x + 1,
                        gridRow: box.position.y + 1
                      }}
                    >
                      {box.number}
                    </div>
                  ))}
                </div>
              </div>

              {/* Corredores */}
              <div className="mt-4 text-xs text-gray-600 text-center">
                <p>Entrada Principal ↑</p>
              </div>
            </CardContent>
          </Card>

          {/* Informações do Box Selecionado */}
          {selectedBox && (
            <Card className="border-modamix-orange">
              <CardContent className="p-4">
                <h4 className="font-semibold text-modamix-dark mb-3">Espaço Selecionado</h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Número:</span>
                    <span className="font-medium">Box {selectedBox.number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tamanho:</span>
                    <span className="font-medium capitalize">{selectedBox.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Valor:</span>
                    <span className="font-bold text-lg text-modamix-orange">R$ 120,00</span>
                  </div>
                </div>

                <Button 
                  onClick={handleReservar}
                  className="w-full bg-modamix-orange hover:bg-modamix-orange/90"
                >
                  Reservar Espaço
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Instruções */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-modamix-dark mb-2">Instruções</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Toque no box desejado para selecioná-lo</li>
                <li>• Boxes verdes estão disponíveis</li>
                <li>• Boxes vermelhos já estão ocupados</li>
                <li>• Cada box tem tamanho e preço diferente</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default MapaEspacos;