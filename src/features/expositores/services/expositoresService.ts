import { 
  Fornecedor, 
  Produto, 
  Carrinho, 
  CarrinhoCompleto,
  Pedido, 
  FiltrosProdutos,
  Expositor,
  ReservaEspaco,
  Feira,
  ItemEspacoCarrinho,
  CheckoutData,
  PagamentoPIX
} from '../types/expositores';

// Mock data para feiras futuras baseado no componente FutureFairs
const mockFeirasFuturas = [
  {
    id: 'feira-1',
    nome: 'FEIRÃO MODA MIX | ENGENHÃO',
    endereco: 'Estádio Nilton Santos - Engenho de Dentro',
    dataInicio: '15 de Janeiro de 2025',
    dataFim: '18 de Janeiro de 2025',
    espacosDisponiveis: 45,
    valorMinimo: 300
  },
  {
    id: 'feira-2',
    nome: 'FEIRÃO MODA MIX | BARRA OLÍMPICA',
    endereco: 'Parque Olímpico - Barra da Tijuca',
    dataInicio: '22 de Janeiro de 2025',
    dataFim: '25 de Janeiro de 2025',
    espacosDisponiveis: 28,
    valorMinimo: 250
  },
  {
    id: 'feira-3',
    nome: 'FEIRÃO MODA MIX | DELCASTILHO',
    endereco: 'Shopping DelCastilho - DelCastilho',
    dataInicio: '29 de Janeiro de 2025',
    dataFim: '01 de Fevereiro de 2025',
    espacosDisponiveis: 15,
    valorMinimo: 400
  },
  {
    id: 'feira-4',
    nome: 'FEIRÃO MODA MIX | ROCINHA',
    endereco: 'Rocinha - Zona Sul',
    dataInicio: '05 de Fevereiro de 2025',
    dataFim: '08 de Fevereiro de 2025',
    espacosDisponiveis: 20,
    valorMinimo: 350
  }
];

// Mock data para fornecedores
const mockFornecedores: Fornecedor[] = [
  {
    id: 'fornecedor-1',
    nome: 'Moda Express Ltda',
    descricao: 'Especialista em roupas femininas e acessórios',
    logo: 'https://via.placeholder.com/80x80/FF6B35/FFFFFF?text=ME',
    avaliacao: 4.8,
    totalProdutos: 45,
    categoria: 'Vestuário Feminino',
    localizacao: 'São Paulo, SP',
    telefone: '(11) 99999-9999',
    email: 'contato@modaexpress.com',
    ativo: true
  },
  {
    id: 'fornecedor-2',
    nome: 'Tecidos Premium',
    descricao: 'Tecidos de alta qualidade para confecção',
    logo: 'https://via.placeholder.com/80x80/FFD93D/000000?text=TP',
    avaliacao: 4.6,
    totalProdutos: 32,
    categoria: 'Tecidos',
    localizacao: 'Rio de Janeiro, RJ',
    telefone: '(21) 88888-8888',
    email: 'vendas@tecidospremium.com',
    ativo: true
  },
  {
    id: 'fornecedor-3',
    nome: 'Acessórios Fashion',
    descricao: 'Acessórios modernos e elegantes',
    logo: 'https://via.placeholder.com/80x80/6C5CE7/FFFFFF?text=AF',
    avaliacao: 4.9,
    totalProdutos: 28,
    categoria: 'Acessórios',
    localizacao: 'Belo Horizonte, MG',
    telefone: '(31) 77777-7777',
    email: 'contato@acessoriosfashion.com',
    ativo: true
  },
  {
    id: 'fornecedor-4',
    nome: 'Calçados Estilo',
    descricao: 'Calçados confortáveis e estilosos',
    logo: 'https://via.placeholder.com/80x80/00B894/FFFFFF?text=CE',
    avaliacao: 4.7,
    totalProdutos: 38,
    categoria: 'Calçados',
    localizacao: 'Porto Alegre, RS',
    telefone: '(51) 66666-6666',
    email: 'vendas@calcadosestilo.com',
    ativo: true
  }
];

// Mock data para produtos
const mockProdutos: Produto[] = [
  {
    id: 'produto-1',
    nome: 'Camiseta Básica Feminina',
    descricao: 'Camiseta 100% algodão, cores variadas',
    preco: 25.90,
    precoOriginal: 35.90,
    estoque: 150,
    categoria: 'Vestuário Feminino',
    fornecedorId: 'fornecedor-1',
    fornecedorNome: 'Moda Express Ltda',
    imagem: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Camiseta',
    ativo: true,
    destaque: true,
    tags: ['básica', 'algodão', 'feminina']
  },
  {
    id: 'produto-2',
    nome: 'Tecido Algodão Premium',
    descricao: 'Tecido 100% algodão, 200g/m²',
    preco: 15.50,
    estoque: 500,
    categoria: 'Tecidos',
    fornecedorId: 'fornecedor-2',
    fornecedorNome: 'Tecidos Premium',
    imagem: 'https://via.placeholder.com/300x300/FFD93D/000000?text=Tecido',
    ativo: true,
    destaque: false,
    tags: ['algodão', 'premium', '200g']
  },
  {
    id: 'produto-3',
    nome: 'Bolsa Transversal',
    descricao: 'Bolsa transversal em couro sintético',
    preco: 89.90,
    precoOriginal: 120.00,
    estoque: 45,
    categoria: 'Acessórios',
    fornecedorId: 'fornecedor-3',
    fornecedorNome: 'Acessórios Fashion',
    imagem: 'https://via.placeholder.com/300x300/6C5CE7/FFFFFF?text=Bolsa',
    ativo: true,
    destaque: true,
    tags: ['bolsa', 'couro', 'transversal']
  },
  {
    id: 'produto-4',
    nome: 'Tênis Casual',
    descricao: 'Tênis casual confortável para dia a dia',
    preco: 129.90,
    estoque: 80,
    categoria: 'Calçados',
    fornecedorId: 'fornecedor-4',
    fornecedorNome: 'Calçados Estilo',
    imagem: 'https://via.placeholder.com/300x300/00B894/FFFFFF?text=Tenis',
    ativo: true,
    destaque: false,
    tags: ['tênis', 'casual', 'confortável']
  },
  {
    id: 'produto-5',
    nome: 'Vestido Floral',
    descricao: 'Vestido floral elegante para ocasiões especiais',
    preco: 189.90,
    estoque: 25,
    categoria: 'Vestuário Feminino',
    fornecedorId: 'fornecedor-1',
    fornecedorNome: 'Moda Express Ltda',
    imagem: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Vestido',
    ativo: true,
    destaque: true,
    tags: ['vestido', 'floral', 'elegante']
  },
  {
    id: 'produto-6',
    nome: 'Tecido Viscose',
    descricao: 'Tecido viscose, 150g/m², cores vibrantes',
    preco: 12.80,
    estoque: 300,
    categoria: 'Tecidos',
    fornecedorId: 'fornecedor-2',
    fornecedorNome: 'Tecidos Premium',
    imagem: 'https://via.placeholder.com/300x300/FFD93D/000000?text=Viscose',
    ativo: true,
    destaque: false,
    tags: ['viscose', '150g', 'vibrante']
  }
];

// Mock data para carrinho completo
const mockCarrinhoCompleto: CarrinhoCompleto = {
  id: 'carrinho-1',
  expositoresId: 'expositor-1',
  itens: [],
  itensEspacos: [],
  total: 0,
  totalItens: 0,
  totalEspacos: 0,
  dataCriacao: new Date(),
  dataAtualizacao: new Date()
};

// Mock data para pedidos
const mockPedidos: Pedido[] = [
  {
    id: 'pedido-1',
    expositoresId: 'expositor-1',
    fornecedorId: 'fornecedor-1',
    fornecedorNome: 'Moda Express Ltda',
    itens: [
      {
        produto: mockProdutos[0],
        quantidade: 10,
        precoUnitario: 25.90,
        precoTotal: 259.00
      }
    ],
    total: 259.00,
    status: 'confirmado',
    dataPedido: new Date('2024-01-15'),
    enderecoEntrega: 'Rua das Flores, 123 - Centro, São Paulo - SP',
    observacoes: 'Entregar no horário comercial'
  }
];

// Mock data para reservas
const mockReservas: ReservaEspaco[] = [
  {
    id: 'reserva-1',
    expositoresId: 'expositor-1',
    feiraId: 'feira-1',
    feiraNome: 'FEIRÃO MODA MIX | ENGENHÃO',
    espacoId: 'espaco-1',
    espacoNome: 'Stand Premium A1',
    dataInicio: new Date('2024-02-15'),
    dataFim: new Date('2024-02-17'),
    valor: 2500.00,
    status: 'confirmada',
    dataReserva: new Date('2024-01-10')
  }
];

// Funções do serviço
export const getFornecedores = async (): Promise<Fornecedor[]> => {
  // Simula delay de API
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockFornecedores.filter(f => f.ativo);
};

export const getFornecedorById = async (id: string): Promise<Fornecedor | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockFornecedores.find(f => f.id === id) || null;
};

export const getProdutos = async (filtros?: FiltrosProdutos): Promise<Produto[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let produtos = mockProdutos.filter(p => p.ativo);
  
  if (filtros) {
    if (filtros.busca) {
      produtos = produtos.filter(p => 
        p.nome.toLowerCase().includes(filtros.busca.toLowerCase()) ||
        p.categoria.toLowerCase().includes(filtros.busca.toLowerCase()) ||
        p.descricao.toLowerCase().includes(filtros.busca.toLowerCase())
      );
    }
    
    if (filtros.categoria) {
      produtos = produtos.filter(p => p.categoria === filtros.categoria);
    }
    
    if (filtros.fornecedor) {
      produtos = produtos.filter(p => p.fornecedorId === filtros.fornecedor);
    }
    
    if (filtros.precoMin > 0) {
      produtos = produtos.filter(p => p.preco >= filtros.precoMin);
    }
    
    if (filtros.precoMax > 0) {
      produtos = produtos.filter(p => p.preco <= filtros.precoMax);
    }
    
    // Ordenação
    switch (filtros.ordenacao) {
      case 'nome':
        produtos.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      case 'preco':
        produtos.sort((a, b) => a.preco - b.preco);
        break;
      case 'recentes':
        produtos.sort((a, b) => b.id.localeCompare(a.id));
        break;
    }
  }
  
  return produtos;
};

export const getProdutosByFornecedor = async (fornecedorId: string): Promise<Produto[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProdutos.filter(p => p.fornecedorId === fornecedorId && p.ativo);
};

export const getCarrinho = async (expositoresId: string): Promise<CarrinhoCompleto> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockCarrinhoCompleto;
};

export const adicionarAoCarrinho = async (
  expositoresId: string, 
  produtoId: string, 
  quantidade: number
): Promise<CarrinhoCompleto> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const produto = mockProdutos.find(p => p.id === produtoId);
  if (!produto) {
    throw new Error('Produto não encontrado');
  }
  
  // Obter o carrinho atual
  const carrinhoAtual = await getCarrinho(expositoresId);
  const carrinho = { ...carrinhoAtual };
  
  const itemExistente = carrinho.itens.find(item => item.produto.id === produtoId);
  
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
    itemExistente.precoTotal = itemExistente.quantidade * itemExistente.precoUnitario;
  } else {
    carrinho.itens.push({
      produto,
      quantidade,
      precoUnitario: produto.preco,
      precoTotal: produto.preco * quantidade
    });
  }
  
  carrinho.total = carrinho.itens.reduce((sum, item) => sum + item.precoTotal, 0) + 
                   carrinho.itensEspacos.reduce((sum, item) => sum + item.precoTotal, 0);
  carrinho.totalItens = carrinho.itens.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.totalEspacos = carrinho.itensEspacos.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.dataAtualizacao = new Date();
  
  // Atualizar o carrinho mock global
  Object.assign(mockCarrinhoCompleto, carrinho);
  
  return carrinho;
};

export const removerDoCarrinho = async (
  expositoresId: string, 
  produtoId: string
): Promise<CarrinhoCompleto> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Obter o carrinho atual
  const carrinhoAtual = await getCarrinho(expositoresId);
  const carrinho = { ...carrinhoAtual };
  
  carrinho.itens = carrinho.itens.filter(item => item.produto.id !== produtoId);
  carrinho.total = carrinho.itens.reduce((sum, item) => sum + item.precoTotal, 0) + 
                   carrinho.itensEspacos.reduce((sum, item) => sum + item.precoTotal, 0);
  carrinho.totalItens = carrinho.itens.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.totalEspacos = carrinho.itensEspacos.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.dataAtualizacao = new Date();
  
  // Atualizar o carrinho mock global
  Object.assign(mockCarrinhoCompleto, carrinho);
  
  return carrinho;
};

export const finalizarPedido = async (
  expositoresId: string,
  fornecedorId: string,
  enderecoEntrega: string,
  observacoes?: string
): Promise<Pedido> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const carrinho = await getCarrinho(expositoresId);
  const fornecedor = await getFornecedorById(fornecedorId);
  
  if (!fornecedor) {
    throw new Error('Fornecedor não encontrado');
  }
  
  const itensFornecedor = carrinho.itens.filter(item => item.produto.fornecedorId === fornecedorId);
  
  if (itensFornecedor.length === 0) {
    throw new Error('Nenhum item do fornecedor no carrinho');
  }
  
  const total = itensFornecedor.reduce((sum, item) => sum + item.precoTotal, 0);
  
  const pedido: Pedido = {
    id: `pedido-${Date.now()}`,
    expositoresId,
    fornecedorId,
    fornecedorNome: fornecedor.nome,
    itens: itensFornecedor,
    total,
    status: 'pendente',
    dataPedido: new Date(),
    enderecoEntrega,
    observacoes
  };
  
  // Simula adição do pedido
  mockPedidos.push(pedido);
  
  return pedido;
};

export const getPedidos = async (expositoresId: string): Promise<Pedido[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockPedidos.filter(p => p.expositoresId === expositoresId);
};

export const getReservas = async (expositoresId: string): Promise<ReservaEspaco[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockReservas.filter(r => r.expositoresId === expositoresId);
};

export const getFeirasFuturas = async () => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockFeirasFuturas;
};

export const adicionarEspacoAoCarrinho = async (
  expositoresId: string,
  feiraId: string,
  quantidade: number
): Promise<CarrinhoCompleto> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const feira = mockFeirasFuturas.find(f => f.id === feiraId);
  if (!feira) {
    throw new Error('Feira não encontrada');
  }
  
  // Obter o carrinho atual
  const carrinhoAtual = await getCarrinho(expositoresId);
  const carrinho = { ...carrinhoAtual };
  
  const itemExistente = carrinho.itensEspacos.find(item => item.feira.id === feiraId);
  
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
    itemExistente.precoTotal = itemExistente.quantidade * itemExistente.precoUnitario;
  } else {
    carrinho.itensEspacos.push({
      feira,
      quantidade,
      precoUnitario: feira.valorMinimo,
      precoTotal: feira.valorMinimo * quantidade
    });
  }
  
  carrinho.total = carrinho.itens.reduce((sum, item) => sum + item.precoTotal, 0) + 
                   carrinho.itensEspacos.reduce((sum, item) => sum + item.precoTotal, 0);
  carrinho.totalItens = carrinho.itens.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.totalEspacos = carrinho.itensEspacos.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.dataAtualizacao = new Date();
  
  // Atualizar o carrinho mock global
  Object.assign(mockCarrinhoCompleto, carrinho);
  
  return carrinho;
};

export const removerEspacoDoCarrinho = async (
  expositoresId: string,
  feiraId: string
): Promise<CarrinhoCompleto> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Obter o carrinho atual
  const carrinhoAtual = await getCarrinho(expositoresId);
  const carrinho = { ...carrinhoAtual };
  
  carrinho.itensEspacos = carrinho.itensEspacos.filter(item => item.feira.id !== feiraId);
  carrinho.total = carrinho.itensEspacos.reduce((sum, item) => sum + item.precoTotal, 0) + 
                   carrinho.itens.reduce((sum, item) => sum + item.precoTotal, 0);
  carrinho.totalItens = carrinho.itens.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.totalEspacos = carrinho.itensEspacos.reduce((sum, item) => sum + item.quantidade, 0);
  carrinho.dataAtualizacao = new Date();
  
  // Atualizar o carrinho mock global
  Object.assign(mockCarrinhoCompleto, carrinho);
  
  return carrinho;
};

export const finalizarCheckout = async (
  checkoutData: CheckoutData
): Promise<PagamentoPIX> => {
  try {
    // TODO: Implementar integração real com Asaas
    // Por enquanto, simulamos a resposta
    
    // Simula delay de processamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simula resposta da API do Asaas
    const pagamento: PagamentoPIX = {
      id: `pix-${Date.now()}`,
      qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      qrCodeText: '00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-e456-426614174000520400005303986540510.005802BR5913ModaMix Store6008Brasilia62070503***6304E2CA',
      valor: checkoutData.valor || 0,
      expiracao: new Date(Date.now() + 30 * 60 * 1000), // 30 minutos
      status: 'pendente'
    };
    
    return pagamento;
    
    /* 
    // Código para integração real com Asaas:
    
    // 1. Criar cliente no Asaas
    const customerData = {
      name: checkoutData.nome,
      email: checkoutData.email,
      phone: checkoutData.telefone,
      mobilePhone: checkoutData.telefone,
      cpfCnpj: checkoutData.cpf,
      postalCode: checkoutData.endereco.cep,
      address: checkoutData.endereco.logradouro,
      addressNumber: checkoutData.endereco.numero,
      complement: checkoutData.endereco.complemento || '',
      province: checkoutData.endereco.estado,
      personType: 'FISICA' as const,
      externalReference: checkoutData.expositoresId,
      observations: checkoutData.observacoes || ''
    };
    
    const customer = await createAsaasCustomer(customerData);
    
    // 2. Criar pagamento PIX
    const paymentData = {
      customer: customer.id,
      billingType: 'PIX' as const,
      value: checkoutData.valor,
      dueDate: calculateDueDate(),
      description: `Compra ModaMix - ${checkoutData.expositoresId}`,
      externalReference: `order-${Date.now()}`
    };
    
    const payment = await createAsaasPixPayment(paymentData);
    
    // 3. Retornar dados do pagamento
    const pagamento: PagamentoPIX = {
      id: payment.id,
      qrCode: payment.pixTransaction.qrCode,
      qrCodeText: payment.pixTransaction.qrCodeText,
      valor: payment.value,
      expiracao: new Date(payment.dueDate),
      status: payment.status === 'PENDING' ? 'pendente' : 'pago'
    };
    
    return pagamento;
    */
    
  } catch (error) {
    console.error('Erro no checkout:', error);
    throw new Error('Erro ao processar pagamento');
  }
};

// Funções utilitárias
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const getCategorias = (): string[] => {
  const categorias = [...new Set(mockProdutos.map(p => p.categoria))];
  return categorias.sort();
}; 