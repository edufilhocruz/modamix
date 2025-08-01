import React, { useState } from 'react';
import { X, CreditCard, QrCode, Copy, Check } from 'lucide-react';
import { CarrinhoCompleto, CheckoutData, PagamentoPIX } from '../types/expositores';
import { finalizarCheckout } from '../services/expositoresService';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  carrinho: CarrinhoCompleto | null;
  formatPrice: (price: number) => string;
  onCheckoutSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  carrinho,
  formatPrice,
  onCheckoutSuccess
}) => {
  const [step, setStep] = useState<'form' | 'pix'>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [pagamento, setPagamento] = useState<PagamentoPIX | null>(null);
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState<Partial<CheckoutData>>({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    },
    observacoes: ''
  });

  if (!isOpen || !carrinho) return null;

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const checkoutData: CheckoutData = {
        expositoresId: carrinho.expositoresId,
        nome: formData.nome || '',
        email: formData.email || '',
        telefone: formData.telefone || '',
        cpf: formData.cpf || '',
        endereco: formData.endereco as CheckoutData['endereco'],
        metodoPagamento: 'pix',
        observacoes: formData.observacoes,
        valor: carrinho.total
      };
      
      const pagamentoResult = await finalizarCheckout(checkoutData);
      setPagamento(pagamentoResult);
      setStep('pix');
    } catch (error) {
      console.error('Erro no checkout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyPix = async () => {
    if (pagamento?.qrCodeText) {
      try {
        await navigator.clipboard.writeText(pagamento.qrCodeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Erro ao copiar:', error);
      }
    }
  };

  const handleClose = () => {
    setStep('form');
    setPagamento(null);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cpf: '',
      endereco: {
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
      },
      observacoes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-modamix-dark">
            {step === 'form' ? 'Finalizar Compra' : 'Pagamento PIX'}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {step === 'form' ? (
          /* Formulário de Checkout */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Resumo do Carrinho */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-modamix-dark mb-3">Resumo do Pedido</h3>
              
              {/* Produtos */}
              {carrinho.itens.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Produtos</h4>
                  {carrinho.itens.map((item) => (
                    <div key={item.produto.id} className="flex justify-between text-sm">
                      <span>{item.produto.nome} x{item.quantidade}</span>
                      <span>{formatPrice(item.precoTotal)}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Espaços */}
              {carrinho.itensEspacos.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Espaços</h4>
                  {carrinho.itensEspacos.map((item) => (
                    <div key={item.feira.id} className="flex justify-between text-sm">
                      <span>{item.feira.nome} x{item.quantidade}</span>
                      <span>{formatPrice(item.precoTotal)}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-modamix-orange">{formatPrice(carrinho.total)}</span>
                </div>
              </div>
            </div>

            {/* Dados Pessoais */}
            <div className="space-y-4">
              <h3 className="font-semibold text-modamix-dark">Dados Pessoais</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CPF *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cpf}
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="space-y-4">
              <h3 className="font-semibold text-modamix-dark">Endereço</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CEP *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.endereco?.cep}
                    onChange={(e) => handleInputChange('endereco.cep', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.endereco?.numero}
                    onChange={(e) => handleInputChange('endereco.numero', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logradouro *
                </label>
                <input
                  type="text"
                  required
                  value={formData.endereco?.logradouro}
                  onChange={(e) => handleInputChange('endereco.logradouro', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Complemento
                </label>
                <input
                  type="text"
                  value={formData.endereco?.complemento}
                  onChange={(e) => handleInputChange('endereco.complemento', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bairro *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.endereco?.bairro}
                    onChange={(e) => handleInputChange('endereco.bairro', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.endereco?.cidade}
                    onChange={(e) => handleInputChange('endereco.cidade', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.endereco?.estado}
                    onChange={(e) => handleInputChange('endereco.estado', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Observações */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Observações
              </label>
              <textarea
                value={formData.observacoes}
                onChange={(e) => handleInputChange('observacoes', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                placeholder="Alguma observação adicional..."
              />
            </div>

            {/* Botão Finalizar */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-modamix-orange text-white py-3 rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processando...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>Finalizar Compra - {formatPrice(carrinho.total)}</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Tela de Pagamento PIX */
          <div className="p-6 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-modamix-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-modamix-dark mb-2">
                Pagamento via PIX
              </h3>
              <p className="text-gray-600 mb-4">
                Escaneie o QR Code ou copie o código PIX para pagar
              </p>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                <img
                  src={pagamento?.qrCode}
                  alt="QR Code PIX"
                  className="w-48 h-48"
                />
              </div>
            </div>

            {/* Código PIX */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Código PIX
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={pagamento?.qrCodeText}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={handleCopyPix}
                  className="px-4 py-2 bg-modamix-orange text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Informações do Pagamento */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Valor:</span>
                <span className="font-semibold text-modamix-dark">
                  {formatPrice(pagamento?.valor || 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Expira em:</span>
                <span className="text-sm text-gray-600">
                  {pagamento?.expiracao.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>

            {/* Instruções */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Como pagar:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Abra o app do seu banco</li>
                <li>• Escolha a opção PIX</li>
                <li>• Escaneie o QR Code ou cole o código</li>
                <li>• Confirme o pagamento</li>
              </ul>
            </div>

            {/* Botões */}
            <div className="flex space-x-3">
              <button
                onClick={() => setStep('form')}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={onCheckoutSuccess}
                className="flex-1 px-4 py-3 bg-modamix-orange text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Já Paguei
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 