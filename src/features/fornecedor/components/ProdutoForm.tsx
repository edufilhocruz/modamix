/**
 * Componente de formulário para produtos
 * Permite criar e editar produtos do fornecedor
 */

import React from 'react';
import { X, Upload, Package } from 'lucide-react';
import { FormDataProduto, Categoria } from '../types/fornecedor';

/**
 * Props para o componente ProdutoForm
 */
interface ProdutoFormProps {
  formData: FormDataProduto;
  categorias: Categoria[];
  editingProduto: any;
  isLoading: boolean;
  error: string | null;
  onInputChange: (field: keyof FormDataProduto, value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

/**
 * Componente de formulário para produtos
 */
export const ProdutoForm: React.FC<ProdutoFormProps> = React.memo(({
  formData,
  categorias,
  editingProduto,
  isLoading,
  error,
  onInputChange,
  onSubmit,
  onClose
}) => {
  const isEditing = !!editingProduto;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Package className="w-6 h-6 text-modamix-orange" />
            <h2 className="text-lg font-semibold text-modamix-dark">
              {isEditing ? 'Editar Produto' : 'Novo Produto'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="p-4 space-y-4">
          {/* Nome do Produto */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              Nome do Produto *
            </label>
            <input
              type="text"
              value={formData.nome}
              onChange={(e) => onInputChange('nome', e.target.value)}
              placeholder="Ex: Camiseta Básica"
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark"
              required
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              Descrição *
            </label>
            <textarea
              value={formData.descricao}
              onChange={(e) => onInputChange('descricao', e.target.value)}
              placeholder="Descreva o produto..."
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 resize-none"
              rows={3}
              required
            />
          </div>

          {/* Preço */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              Preço *
            </label>
            <input
              type="text"
              value={formData.preco}
              onChange={(e) => onInputChange('preco', e.target.value)}
              placeholder="R$ 0,00"
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark"
              required
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              Categoria *
            </label>
            <select
              value={formData.categoria}
              onChange={(e) => onInputChange('categoria', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.nome}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Estoque */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              Estoque *
            </label>
            <input
              type="number"
              value={formData.estoque}
              onChange={(e) => onInputChange('estoque', e.target.value)}
              placeholder="0"
              min="0"
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark"
              required
            />
          </div>

          {/* Imagem (opcional) */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              URL da Imagem (opcional)
            </label>
            <div className="relative">
                          <input
              type="text"
              value={formData.imagem || ''}
              onChange={(e) => onInputChange('imagem', e.target.value)}
              placeholder="https://exemplo.com/imagem.jpg"
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark"
            />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Upload className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Cole a URL de uma imagem do produto
            </p>
          </div>

          {/* Preview da imagem */}
          {formData.imagem && (
            <div>
              <label className="block text-sm font-medium text-modamix-dark mb-2">
                Preview da Imagem
              </label>
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={formData.imagem}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}

          {/* Mensagem de erro */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Botões */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 text-modamix-dark border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-modamix-orange text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Salvando...</span>
                </div>
              ) : (
                isEditing ? 'Atualizar Produto' : 'Criar Produto'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

ProdutoForm.displayName = 'ProdutoForm'; 