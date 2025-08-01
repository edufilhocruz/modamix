import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import { Produto } from '../types/expositores';

interface ProductCardProps {
  produto: Produto;
  onAddToCart: (produtoId: string, quantidade: number) => void;
  formatPrice: (price: number) => string;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({
  produto,
  onAddToCart,
  formatPrice
}) => {
  const [quantidade, setQuantidade] = React.useState(1);
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      await onAddToCart(produto.id, quantidade);
      // Feedback visual
      const button = document.getElementById(`add-cart-${produto.id}`);
      if (button) {
        button.classList.add('bg-green-500');
        setTimeout(() => {
          button.classList.remove('bg-green-500');
        }, 500);
      }
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Imagem do produto */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        {produto.imagem ? (
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>

      {/* Informações do produto */}
      <div className="p-3 flex-1 flex flex-col">
        {/* Nome do produto */}
        <h3 className="text-lg font-semibold text-modamix-dark mb-1 line-clamp-2 group-hover:text-modamix-orange transition-colors">
          {produto.nome}
        </h3>

        {/* Descrição */}
        <p className="text-sm text-gray-600 mb-2 line-clamp-2 flex-1">
          {produto.descricao}
        </p>

        {/* Fornecedor */}
        <p className="text-xs text-gray-500 mb-2">
          Fornecedor: <span className="font-medium text-modamix-dark">{produto.fornecedorNome}</span>
        </p>

        {/* Preços */}
        <div className="mb-3">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xl font-bold text-modamix-dark">
              {formatPrice(produto.preco)}
            </span>
            {produto.precoOriginal && produto.precoOriginal > produto.preco && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(produto.precoOriginal)}
              </span>
            )}
          </div>
          {produto.precoOriginal && produto.precoOriginal > produto.preco && (
            <span className="text-sm text-green-600 font-medium">
              {Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Quantidade */}
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center border border-gray-200 rounded-lg w-full">
            <button
              onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
              className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors flex-1"
              disabled={produto.estoque === 0}
            >
              -
            </button>
            <span className="px-4 py-2 text-modamix-dark font-medium min-w-[3rem] text-center flex-1">
              {quantidade}
            </span>
            <button
              onClick={() => setQuantidade(Math.min(produto.estoque, quantidade + 1))}
              className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors flex-1"
              disabled={produto.estoque === 0 || quantidade >= produto.estoque}
            >
              +
            </button>
          </div>
        </div>

        {/* Botão Comprar */}
        <button
          id={`add-cart-${produto.id}`}
          onClick={handleAddToCart}
          disabled={produto.estoque === 0 || isAddingToCart}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-modamix-orange text-white rounded-lg hover:bg-orange-600 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>
            {isAddingToCart ? 'Adicionando...' : produto.estoque === 0 ? 'Esgotado' : 'Comprar'}
          </span>
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard'; 