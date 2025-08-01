import React from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, Calendar } from 'lucide-react';
import { CarrinhoCompleto, ItemCarrinho, ItemEspacoCarrinho } from '../types/expositores';

interface CarrinhoModalProps {
  carrinho: CarrinhoCompleto | null;
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (produtoId: string) => void;
  onRemoveEspaco: (feiraId: string) => void;
  onUpdateQuantity: (produtoId: string, quantidade: number) => void;
  onCheckout: () => void;
  formatPrice: (price: number) => string;
}

export const CarrinhoModal: React.FC<CarrinhoModalProps> = React.memo(({
  carrinho,
  isOpen,
  onClose,
  onRemoveItem,
  onRemoveEspaco,
  onUpdateQuantity,
  onCheckout,
  formatPrice
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-6 h-6 text-modamix-orange" />
            <h2 className="text-xl font-bold text-modamix-dark">
              Carrinho de Compras
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto">
          {!carrinho || (carrinho.itens.length === 0 && carrinho.itensEspacos.length === 0) ? (
            <div className="p-8 text-center">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Carrinho vazio
              </h3>
              <p className="text-gray-500">
                Adicione produtos ou espaços ao seu carrinho para começar
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {/* Produtos */}
              {carrinho.itens.length > 0 && (
                <>
                  <h3 className="font-semibold text-modamix-dark text-sm">Produtos</h3>
                  {carrinho.itens.map((item) => (
                <div key={item.produto.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  {/* Imagem do produto */}
                  <div className="flex-shrink-0">
                    {item.produto.imagem ? (
                      <img
                        src={item.produto.imagem}
                        alt={item.produto.nome}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-xs">IMG</span>
                      </div>
                    )}
                  </div>

                  {/* Informações do produto */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-modamix-dark truncate">
                      {item.produto.nome}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {formatPrice(item.precoUnitario)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Fornecedor: {item.produto.fornecedorNome}
                    </p>
                  </div>

                  {/* Controles de quantidade */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.produto.id, item.quantidade - 1)}
                      disabled={item.quantidade <= 1}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium text-modamix-dark">
                      {item.quantidade}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.produto.id, item.quantidade + 1)}
                      disabled={item.quantidade >= item.produto.estoque}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Preço total e remover */}
                  <div className="flex flex-col items-end space-y-2">
                    <span className="font-bold text-modamix-dark">
                      {formatPrice(item.precoTotal)}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.produto.id)}
                      className="p-1 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                  ))}
                </>
              )}

              {/* Espaços */}
              {carrinho.itensEspacos.length > 0 && (
                <>
                  <h3 className="font-semibold text-modamix-dark text-sm">Espaços</h3>
                  {carrinho.itensEspacos.map((item) => (
                    <div key={item.feira.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      {/* Ícone da feira */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-modamix-orange rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Informações da feira */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-modamix-dark truncate">
                          {item.feira.nome}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {formatPrice(item.precoUnitario)} por box
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.feira.endereco}
                        </p>
                      </div>

                      {/* Quantidade */}
                      <div className="flex items-center space-x-2">
                        <span className="w-8 text-center font-medium text-modamix-dark">
                          x{item.quantidade}
                        </span>
                      </div>

                      {/* Preço total e remover */}
                      <div className="flex flex-col items-end space-y-2">
                        <span className="font-bold text-modamix-dark">
                          {formatPrice(item.precoTotal)}
                        </span>
                        <button
                          onClick={() => onRemoveEspaco(item.feira.id)}
                          className="p-1 text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {carrinho && (carrinho.itens.length > 0 || carrinho.itensEspacos.length > 0) && (
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-modamix-dark">
                Total ({carrinho.totalItens + carrinho.totalEspacos} itens):
              </span>
              <span className="text-xl font-bold text-modamix-dark">
                {formatPrice(carrinho.total)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-modamix-orange text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

CarrinhoModal.displayName = 'CarrinhoModal'; 