export interface Fornecedor {
  id: string;
  nome: string;
  descricao: string;
  logo?: string;
  avaliacao: number;
  totalProdutos: number;
  categoria: string;
  localizacao: string;
  telefone: string;
  email: string;
  ativo: boolean;
}

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal?: number;
  estoque: number;
  categoria: string;
  fornecedorId: string;
  fornecedorNome: string;
  imagem?: string;
  ativo: boolean;
  destaque: boolean;
  tags: string[];
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
  precoTotal: number;
}

export interface Carrinho {
  id: string;
  expositoresId: string;
  itens: ItemCarrinho[];
  total: number;
  totalItens: number;
  dataCriacao: Date;
  dataAtualizacao: Date;
}

export interface Pedido {
  id: string;
  expositoresId: string;
  fornecedorId: string;
  fornecedorNome: string;
  itens: ItemCarrinho[];
  total: number;
  status: 'pendente' | 'confirmado' | 'enviado' | 'entregue' | 'cancelado';
  dataPedido: Date;
  dataEntrega?: Date;
  enderecoEntrega: string;
  observacoes?: string;
}

export interface FiltrosProdutos {
  busca: string;
  categoria: string;
  fornecedor: string;
  precoMin: number;
  precoMax: number;
  ordenacao: 'nome' | 'preco' | 'avaliacao' | 'recentes';
}

export interface Expositor {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cnpj: string;
  categoriaNegocio: string;
  ativo: boolean;
  dataCadastro: Date;
}

export interface ReservaEspaco {
  id: string;
  expositoresId: string;
  feiraId: string;
  feiraNome: string;
  espacoId: string;
  espacoNome: string;
  dataInicio: Date;
  dataFim: Date;
  valor: number;
  status: 'pendente' | 'confirmada' | 'cancelada';
  dataReserva: Date;
}

export interface Feira {
  id: string;
  nome: string;
  endereco: string;
  dataInicio: string;
  dataFim: string;
  espacosDisponiveis: number;
  valorMinimo: number;
}

export interface ItemEspacoCarrinho {
  feira: Feira;
  quantidade: number;
  precoUnitario: number;
  precoTotal: number;
}

export interface CarrinhoCompleto {
  id: string;
  expositoresId: string;
  itens: ItemCarrinho[];
  itensEspacos: ItemEspacoCarrinho[];
  total: number;
  totalItens: number;
  totalEspacos: number;
  dataCriacao: Date;
  dataAtualizacao: Date;
}

export interface CheckoutData {
  expositoresId: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  metodoPagamento: 'pix';
  observacoes?: string;
}

export interface PagamentoPIX {
  id: string;
  qrCode: string;
  qrCodeText: string;
  valor: number;
  expiracao: Date;
  status: 'pendente' | 'pago' | 'expirado';
} 