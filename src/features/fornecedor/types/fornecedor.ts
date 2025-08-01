/**
 * Tipos para a feature de Fornecedor
 * Define as interfaces e tipos utilizados em toda a feature
 */

export interface MetodosPagamento {
  dinheiro: boolean;
  credito: boolean;
  debito: boolean;
  pix: boolean;
}

export interface FormDataFeira {
  nomeFeira: string;
  numeroBarracas: string;
  precoBarraca: string;
  metodosPagamento: MetodosPagamento;
}

export interface FornecedorState {
  formData: FormDataFeira;
  isLoading: boolean;
  error: string | null;
}

export interface CreateFeiraRequest {
  nomeFeira: string;
  numeroBarracas: number;
  precoBarraca: number;
  metodosPagamento: MetodosPagamento;
  localizacao?: string;
}

export interface CreateFeiraResponse {
  id: string;
  nomeFeira: string;
  status: 'success' | 'error';
  message: string;
}

// Tipos para Produtos
export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  estoque: number;
  imagem?: string;
  ativo: boolean;
  dataCadastro: Date;
  fornecedorId: string;
}

export interface FormDataProduto {
  nome: string;
  descricao: string;
  preco: string;
  categoria: string;
  estoque: string;
  imagem?: string;
}

export interface CreateProdutoRequest {
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  estoque: number;
  imagem?: string;
  fornecedorId: string;
}

export interface CreateProdutoResponse {
  id: string;
  nome: string;
  status: 'success' | 'error';
  message: string;
}

// Tipos para Categorias
export interface Categoria {
  id: string;
  nome: string;
  descricao: string;
  ativa: boolean;
}

// Tipos para Fornecedor
export interface Fornecedor {
  id: string;
  nomeEmpresa: string;
  cnpj: string;
  email: string;
  telefone: string;
  endereco: string;
  ativo: boolean;
  dataCadastro: Date;
} 