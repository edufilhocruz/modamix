/**
 * Hook para gerenciamento de produtos
 * Centraliza toda a lógica de estado e operações relacionadas a produtos
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  Produto, 
  FormDataProduto, 
  CreateProdutoRequest,
  Categoria 
} from '../types/fornecedor';
import { 
  getProdutos, 
  createProduto, 
  updateProduto, 
  deleteProduto, 
  getCategorias,
  validateProdutoData,
  formatPrice,
  parsePriceToNumber
} from '../services/produtoService';

/**
 * Estado inicial do formulário de produto
 */
const initialFormData: FormDataProduto = {
  nome: '',
  descricao: '',
  preco: '',
  categoria: '',
  estoque: '',
  imagem: ''
};

/**
 * Hook principal para gerenciamento de produtos
 */
export const useProdutos = (fornecedorId: string = 'fornecedor-1') => {
  // Estados principais
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [formData, setFormData] = useState<FormDataProduto>(initialFormData);
  const [editingProduto, setEditingProduto] = useState<Produto | null>(null);
  
  // Estados de loading e erro
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProdutos, setIsLoadingProdutos] = useState(false);
  const [isLoadingCategorias, setIsLoadingCategorias] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Estados de UI
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  /**
   * Carregar produtos do fornecedor
   */
  const loadProdutos = useCallback(async () => {
    try {
      setIsLoadingProdutos(true);
      setError(null);
      const data = await getProdutos(fornecedorId);
      setProdutos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar produtos');
    } finally {
      setIsLoadingProdutos(false);
    }
  }, [fornecedorId]);

  /**
   * Carregar categorias
   */
  const loadCategorias = useCallback(async () => {
    try {
      setIsLoadingCategorias(true);
      const data = await getCategorias();
      setCategorias(data);
    } catch (err) {
      console.error('Erro ao carregar categorias:', err);
    } finally {
      setIsLoadingCategorias(false);
    }
  }, []);

  /**
   * Carregar dados iniciais
   */
  useEffect(() => {
    loadProdutos();
    loadCategorias();
  }, [loadProdutos, loadCategorias]);

  /**
   * Manipular mudanças no formulário
   */
  const handleInputChange = useCallback((field: keyof FormDataProduto, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  /**
   * Resetar formulário
   */
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setEditingProduto(null);
    setError(null);
  }, []);

  /**
   * Abrir formulário para criar novo produto
   */
  const openCreateForm = useCallback(() => {
    resetForm();
    setShowForm(true);
  }, [resetForm]);

  /**
   * Abrir formulário para editar produto
   */
  const openEditForm = useCallback((produto: Produto) => {
    setFormData({
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco.toString(),
      categoria: produto.categoria,
      estoque: produto.estoque.toString(),
      imagem: produto.imagem || ''
    });
    setEditingProduto(produto);
    setShowForm(true);
  }, []);

  /**
   * Fechar formulário
   */
  const closeForm = useCallback(() => {
    setShowForm(false);
    resetForm();
  }, [resetForm]);

  /**
   * Criar novo produto
   */
  const handleCreateProduto = useCallback(async () => {
    try {
      // Validação
      const errors = validateProdutoData(formData);
      if (errors.length > 0) {
        setError(errors.join(', '));
        return;
      }

      setIsLoading(true);
      setError(null);

      const requestData: CreateProdutoRequest = {
        nome: formData.nome.trim(),
        descricao: formData.descricao.trim(),
        preco: parsePriceToNumber(formData.preco),
        categoria: formData.categoria,
        estoque: parseInt(formData.estoque),
        imagem: formData.imagem || undefined,
        fornecedorId
      };

      const response = await createProduto(requestData);

      if (response.status === 'success') {
        await loadProdutos(); // Recarregar lista
        closeForm();
        return { success: true, message: response.message };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao criar produto';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [formData, fornecedorId, loadProdutos, closeForm]);

  /**
   * Atualizar produto existente
   */
  const handleUpdateProduto = useCallback(async () => {
    if (!editingProduto) return { success: false, message: 'Produto não encontrado' };

    try {
      // Validação
      const errors = validateProdutoData(formData);
      if (errors.length > 0) {
        setError(errors.join(', '));
        return { success: false, message: errors.join(', ') };
      }

      setIsLoading(true);
      setError(null);

      const updateData = {
        nome: formData.nome.trim(),
        descricao: formData.descricao.trim(),
        preco: parsePriceToNumber(formData.preco),
        categoria: formData.categoria,
        estoque: parseInt(formData.estoque),
        imagem: formData.imagem || undefined
      };

      const response = await updateProduto(editingProduto.id, updateData);

      if (response.status === 'success') {
        await loadProdutos(); // Recarregar lista
        closeForm();
        return { success: true, message: response.message };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao atualizar produto';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [formData, editingProduto, loadProdutos, closeForm]);

  /**
   * Deletar produto
   */
  const handleDeleteProduto = useCallback(async (produtoId: string) => {
    if (!window.confirm('Tem certeza que deseja deletar este produto?')) {
      return { success: false, message: 'Operação cancelada' };
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await deleteProduto(produtoId);

      if (response.status === 'success') {
        await loadProdutos(); // Recarregar lista
        return { success: true, message: response.message };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao deletar produto';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [loadProdutos]);

  /**
   * Alternar status ativo/inativo do produto
   */
  const toggleProdutoStatus = useCallback(async (produto: Produto) => {
    try {
      const response = await updateProduto(produto.id, { ativo: !produto.ativo });
      
      if (response.status === 'success') {
        await loadProdutos();
        return { success: true, message: response.message };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao alterar status';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  }, [loadProdutos]);

  /**
   * Filtrar produtos por busca e categoria
   */
  const filteredProdutos = produtos.filter(produto => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         produto.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || produto.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  /**
   * Formatar preço para exibição
   */
  const formatPriceForDisplay = useCallback((price: number) => {
    return formatPrice(price);
  }, []);

  return {
    // Estados
    produtos: filteredProdutos,
    categorias,
    formData,
    editingProduto,
    isLoading,
    isLoadingProdutos,
    isLoadingCategorias,
    error,
    showForm,
    searchTerm,
    selectedCategory,
    
    // Ações
    handleInputChange,
    handleCreateProduto,
    handleUpdateProduto,
    handleDeleteProduto,
    toggleProdutoStatus,
    openCreateForm,
    openEditForm,
    closeForm,
    resetForm,
    setSearchTerm,
    setSelectedCategory,
    formatPriceForDisplay,
    
    // Utilitários
    hasProdutos: produtos.length > 0,
    totalProdutos: produtos.length,
    produtosAtivos: produtos.filter(p => p.ativo).length
  };
}; 