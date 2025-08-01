/**
 * Serviço para gerenciamento de produtos
 * Responsável por todas as operações relacionadas a produtos
 */

import { 
  Produto, 
  FormDataProduto, 
  CreateProdutoRequest, 
  CreateProdutoResponse,
  Categoria 
} from '../types/fornecedor';
import { FORNECEDOR_CONFIG } from '../config/fornecedor.config';

/**
 * Mock data para produtos
 */
const mockProdutos: Produto[] = [
  {
    id: '1',
    nome: 'Camiseta Básica',
    descricao: 'Camiseta 100% algodão, cores variadas',
    preco: 29.90,
    categoria: 'Vestuário',
    estoque: 150,
    imagem: '/placeholder.svg',
    ativo: true,
    dataCadastro: new Date('2024-01-15'),
    fornecedorId: 'fornecedor-1'
  },
  {
    id: '2',
    nome: 'Calça Jeans',
    descricao: 'Calça jeans de alta qualidade',
    preco: 89.90,
    categoria: 'Vestuário',
    estoque: 75,
    imagem: '/placeholder.svg',
    ativo: true,
    dataCadastro: new Date('2024-01-10'),
    fornecedorId: 'fornecedor-1'
  },
  {
    id: '3',
    nome: 'Tênis Esportivo',
    descricao: 'Tênis confortável para atividades físicas',
    preco: 129.90,
    categoria: 'Calçados',
    estoque: 45,
    imagem: '/placeholder.svg',
    ativo: true,
    dataCadastro: new Date('2024-01-05'),
    fornecedorId: 'fornecedor-1'
  }
];

/**
 * Mock data para categorias
 */
const mockCategorias: Categoria[] = [
  { id: '1', nome: 'Vestuário', descricao: 'Roupas e acessórios', ativa: true },
  { id: '2', nome: 'Calçados', descricao: 'Sapatos e tênis', ativa: true },
  { id: '3', nome: 'Acessórios', descricao: 'Bolsas, cintos, etc', ativa: true },
  { id: '4', nome: 'Cosméticos', descricao: 'Produtos de beleza', ativa: true },
  { id: '5', nome: 'Eletrônicos', descricao: 'Gadgets e tecnologia', ativa: true }
];

/**
 * Buscar todos os produtos do fornecedor
 */
export const getProdutos = async (fornecedorId: string): Promise<Produto[]> => {
  try {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockProdutos.filter(produto => produto.fornecedorId === fornecedorId);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw new Error('Falha ao carregar produtos');
  }
};

/**
 * Buscar produto por ID
 */
export const getProdutoById = async (id: string): Promise<Produto | null> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockProdutos.find(produto => produto.id === id) || null;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    throw new Error('Falha ao carregar produto');
  }
};

/**
 * Criar novo produto
 */
export const createProduto = async (data: CreateProdutoRequest): Promise<CreateProdutoResponse> => {
  try {
    // Simular validação
    if (!data.nome || !data.descricao || data.preco <= 0) {
      throw new Error('Dados inválidos para criar produto');
    }

    await new Promise(resolve => setTimeout(resolve, 800));

    const novoProduto: Produto = {
      id: Date.now().toString(),
      nome: data.nome,
      descricao: data.descricao,
      preco: data.preco,
      categoria: data.categoria,
      estoque: data.estoque,
      imagem: data.imagem,
      ativo: true,
      dataCadastro: new Date(),
      fornecedorId: data.fornecedorId
    };

    mockProdutos.push(novoProduto);

    return {
      id: novoProduto.id,
      nome: novoProduto.nome,
      status: 'success',
      message: 'Produto criado com sucesso!'
    };
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return {
      id: '',
      nome: data.nome,
      status: 'error',
      message: error instanceof Error ? error.message : 'Falha ao criar produto'
    };
  }
};

/**
 * Atualizar produto
 */
export const updateProduto = async (id: string, data: Partial<Produto>): Promise<CreateProdutoResponse> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 600));

    const index = mockProdutos.findIndex(produto => produto.id === id);
    if (index === -1) {
      throw new Error('Produto não encontrado');
    }

    mockProdutos[index] = { ...mockProdutos[index], ...data };

    return {
      id,
      nome: mockProdutos[index].nome,
      status: 'success',
      message: 'Produto atualizado com sucesso!'
    };
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return {
      id,
      nome: data.nome || '',
      status: 'error',
      message: error instanceof Error ? error.message : 'Falha ao atualizar produto'
    };
  }
};

/**
 * Deletar produto
 */
export const deleteProduto = async (id: string): Promise<CreateProdutoResponse> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 400));

    const index = mockProdutos.findIndex(produto => produto.id === id);
    if (index === -1) {
      throw new Error('Produto não encontrado');
    }

    const produto = mockProdutos[index];
    mockProdutos.splice(index, 1);

    return {
      id,
      nome: produto.nome,
      status: 'success',
      message: 'Produto deletado com sucesso!'
    };
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    return {
      id,
      nome: '',
      status: 'error',
      message: error instanceof Error ? error.message : 'Falha ao deletar produto'
    };
  }
};

/**
 * Buscar todas as categorias
 */
export const getCategorias = async (): Promise<Categoria[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockCategorias.filter(categoria => categoria.ativa);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw new Error('Falha ao carregar categorias');
  }
};

/**
 * Validar dados do produto
 */
export const validateProdutoData = (data: FormDataProduto): string[] => {
  const errors: string[] = [];

  if (!data.nome.trim()) {
    errors.push('Nome do produto é obrigatório');
  }

  if (!data.descricao.trim()) {
    errors.push('Descrição é obrigatória');
  }

  if (!data.preco || parseFloat(data.preco) <= 0) {
    errors.push('Preço deve ser maior que zero');
  }

  if (!data.categoria) {
    errors.push('Categoria é obrigatória');
  }

  if (!data.estoque || parseInt(data.estoque) < 0) {
    errors.push('Estoque deve ser maior ou igual a zero');
  }

  return errors;
};

/**
 * Formatar preço para exibição
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

/**
 * Converter preço de string para número
 */
export const parsePriceToNumber = (priceString: string): number => {
  return parseFloat(priceString.replace(/[^\d,]/g, '').replace(',', '.'));
}; 