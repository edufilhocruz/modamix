import { ArrowLeft, CreditCard, MapPin, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const PreCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { box, feira, preco } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  if (!box) {
    navigate('/feiras');
    return null;
  }

  const handleConfirmarReserva = () => {
    if (paymentMethod) {
      // Aqui seria integrado com o sistema de pagamento
      alert(`Reserva confirmada para o Box ${box.number}! Pagamento de R$ ${preco},00 via ${paymentMethod}`);
      navigate('/');
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
            <CreditCard className="h-5 w-5 text-modamix-dark" />
            <h1 className="text-xl font-bold text-modamix-dark">Finalizar Reserva</h1>
          </div>
        </header>

        <main className="p-4 space-y-6 pb-32">
          {/* Resumo da Reserva */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-modamix-dark mb-4">Resumo da Reserva</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Evento:</span>
                  <span className="font-medium">{feira}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Espaço:</span>
                  <span className="font-medium">Box {box.number}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tamanho:</span>
                  <span className="font-medium capitalize">{box.size}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Data:</span>
                  <span className="font-medium">15 a 18 de Dezembro</span>
                </div>
                
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-modamix-dark">Total:</span>
                    <span className="font-bold text-xl text-modamix-orange">R$ {preco},00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forma de Pagamento */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-modamix-dark mb-4">Forma de Pagamento</h4>
              
              <div className="space-y-3">
                <div 
                  className={`p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'cartao' ? 'border-modamix-orange bg-modamix-orange/10' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('cartao')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <span className="font-medium">Cartão de Crédito</span>
                    </div>
                    {paymentMethod === 'cartao' && (
                      <Check className="h-5 w-5 text-modamix-orange" />
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 ml-8">Até 12x sem juros</p>
                </div>

                <div 
                  className={`p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'pix' ? 'border-modamix-orange bg-modamix-orange/10' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('pix')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded"></div>
                      <span className="font-medium">PIX</span>
                    </div>
                    {paymentMethod === 'pix' && (
                      <Check className="h-5 w-5 text-modamix-orange" />
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 ml-8">5% de desconto - R$ 114,00</p>
                </div>

                <div 
                  className={`p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'boleto' ? 'border-modamix-orange bg-modamix-orange/10' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('boleto')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded"></div>
                      <span className="font-medium">Boleto Bancário</span>
                    </div>
                    {paymentMethod === 'boleto' && (
                      <Check className="h-5 w-5 text-modamix-orange" />
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 ml-8">Vencimento em 3 dias úteis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termos e Condições */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-modamix-dark mb-3">Termos e Condições</h4>
              <div className="text-xs text-gray-600 space-y-2">
                <p>• O pagamento deve ser realizado até 48h antes do evento</p>
                <p>• Cancelamentos com mais de 7 dias têm reembolso integral</p>
                <p>• O espaço inclui mesa, cadeiras e energia elétrica</p>
                <p>• Decoração e produtos por conta do expositor</p>
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={handleConfirmarReserva}
            disabled={!paymentMethod}
            className="w-full bg-modamix-orange hover:bg-modamix-orange/90 disabled:bg-gray-300"
          >
            Confirmar Reserva
          </Button>
        </main>
      </div>
    </div>
  );
};

export default PreCheckout;