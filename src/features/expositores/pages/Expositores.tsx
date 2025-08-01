import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { ExpositoresContent } from '../components/ExpositoresContent';
import { ExpositoresNavbar } from '../components/ExpositoresNavbar';
import { CarrinhoModal } from '../components/CarrinhoModal';
import { CheckoutModal } from '../components/CheckoutModal';
import { useExpositores } from '../hooks/useExpositores';
import { useToast } from '@/hooks/use-toast';

const Expositores: React.FC = () => {
  const [isCarrinhoOpen, setIsCarrinhoOpen] = React.useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  const [carrinhoAnimation, setCarrinhoAnimation] = React.useState(false);
  const { toast } = useToast();

  const handleSelecionarFeira = (data: any) => {
    if (data.feiraId && data.quantidade) {
      // Adicionar espaço ao carrinho
      handleAdicionarEspacoAoCarrinho(data.feiraId, data.quantidade);
      
      // Animar o carrinho
      setCarrinhoAnimation(true);
      setTimeout(() => setCarrinhoAnimation(false), 500);
      
      // Mostrar toast de confirmação
      toast({
        title: "Espaço adicionado!",
        description: `${data.quantidade} box(es) adicionado(s) ao carrinho`,
        duration: 2000,
      });
    }
  };

  const handleCheckout = () => {
    setIsCarrinhoOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setIsCheckoutOpen(false);
    // TODO: Limpar carrinho após sucesso
    console.log('Checkout realizado com sucesso!');
  };

  const handleAdicionarProdutoAoCarrinho = async (produtoId: string, quantidade: number) => {
    await handleAdicionarAoCarrinho(produtoId, quantidade);
    
    // Animar o carrinho
    setCarrinhoAnimation(true);
    setTimeout(() => setCarrinhoAnimation(false), 500);
    
    // Mostrar toast de confirmação
    toast({
      title: "Produto adicionado!",
      description: `${quantidade} item(ns) adicionado(s) ao carrinho`,
      duration: 2000,
    });
  };

  const {
    activeSection,
    fornecedores,
    produtos,
    pedidos,
    reservas,
    feirasFuturas,
    selectedFornecedor,
    filtros,
    pedidosFiltros,
    reservasFiltros,
    carrinho,
    isLoadingFornecedores,
    isLoadingProdutos,
    isLoadingPedidos,
    isLoadingReservas,
    isLoadingFeirasFuturas,
    handleSectionChange,
    handleSelectFornecedor,
    handleAdicionarAoCarrinho,
    handleRemoverDoCarrinho,
    handleAdicionarEspacoAoCarrinho,
    handleRemoverEspacoDoCarrinho,
    updateFiltros,
    clearFiltros,
    updatePedidosFiltros,
    clearPedidosFiltros,
    updateReservasFiltros,
    clearReservasFiltros,
    formatPrice
  } = useExpositores();

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 justify-between group/design-root overflow-x-hidden pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-modamix-dark">
                ModaMix Expositores
              </h1>
              <p className="text-sm text-gray-600">
                Compre produtos e espaços nas feiras
              </p>
            </div>
                                    <div className="flex items-center space-x-3">
                          {/* Carrinho */}
                          <button
                            onClick={() => setIsCarrinhoOpen(true)}
                            className={`relative w-10 h-10 bg-modamix-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-200 ${
                              carrinhoAnimation ? 'scale-110 shadow-lg' : ''
                            }`}
                          >
                            <ShoppingCart className={`w-5 h-5 text-white transition-all duration-200 ${
                              carrinhoAnimation ? 'animate-pulse' : ''
                            }`} />
                            {carrinho && (carrinho.totalItens + carrinho.totalEspacos) > 0 && (
                              <span className={`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium transition-all duration-200 ${
                                carrinhoAnimation ? 'scale-125' : 'scale-100'
                              }`}>
                                {(carrinho.totalItens + carrinho.totalEspacos) > 99 ? '99+' : (carrinho.totalItens + carrinho.totalEspacos)}
                              </span>
                            )}
                          </button>
                        </div>
          </div>
        </div>
      </header>

                        {/* Conteúdo Principal */}
                  <ExpositoresContent
                    activeSection={activeSection}
                    fornecedores={fornecedores}
                    produtos={produtos}
                    pedidos={pedidos}
                    reservas={reservas}
                    feirasFuturas={feirasFuturas}
                    selectedFornecedor={selectedFornecedor}
                    filtros={filtros}
                    pedidosFiltros={pedidosFiltros}
                    reservasFiltros={reservasFiltros}
                    isLoadingFornecedores={isLoadingFornecedores}
                    isLoadingProdutos={isLoadingProdutos}
                    isLoadingPedidos={isLoadingPedidos}
                    isLoadingReservas={isLoadingReservas}
                    isLoadingFeirasFuturas={isLoadingFeirasFuturas}
                    onSelectFornecedor={handleSelectFornecedor}
                    onAddToCart={handleAdicionarProdutoAoCarrinho}
                    onFiltrosChange={updateFiltros}
                    onClearFiltros={clearFiltros}
                    onPedidosFiltrosChange={updatePedidosFiltros}
                    onClearPedidosFiltros={clearPedidosFiltros}
                    onReservasFiltrosChange={updateReservasFiltros}
                    onClearReservasFiltros={clearReservasFiltros}
                    onSelecionarFeira={handleSelecionarFeira}
                    onSectionChange={handleSectionChange}
                    formatPrice={formatPrice}
                  />

      {/* Navbar */}
      <ExpositoresNavbar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Modal do Carrinho */}
      <CarrinhoModal
        carrinho={carrinho}
        isOpen={isCarrinhoOpen}
        onClose={() => setIsCarrinhoOpen(false)}
        onRemoveItem={handleRemoverDoCarrinho}
        onRemoveEspaco={handleRemoverEspacoDoCarrinho}
        onUpdateQuantity={(produtoId, quantidade) => {
          // TODO: Implementar atualização de quantidade
          console.log('Atualizar quantidade:', produtoId, quantidade);
        }}
        onCheckout={handleCheckout}
        formatPrice={formatPrice}
      />

      {/* Modal de Checkout */}
      <CheckoutModal
        carrinho={carrinho}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        formatPrice={formatPrice}
        onCheckoutSuccess={handleCheckoutSuccess}
      />
    </div>
  );
};

export default Expositores; 