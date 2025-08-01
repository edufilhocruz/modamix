import { useState, useEffect, useCallback } from 'react';
import { 
  Fornecedor, 
  Produto, 
  Carrinho, 
  Pedido, 
  FiltrosProdutos,
  ReservaEspaco 
} from '../types/expositores';
import { 
  getFornecedores, 
  getProdutos, 
  getCarrinho, 
  adicionarAoCarrinho, 
  removerDoCarrinho,
  adicionarEspacoAoCarrinho,
  removerEspacoDoCarrinho,
  getPedidos,
  getReservas,
  getFeirasFuturas,
  formatPrice 
} from '../services/expositoresService';

export const useExpositores = (expositoresId: string = 'expositor-1') => {
  // Estados principais
  const [activeSection, setActiveSection] = useState<'inicio' | 'produtos' | 'carrinho' | 'pedidos' | 'reservas' | 'reservar-espacos' | 'perfil'>('inicio');
  const [selectedFornecedor, setSelectedFornecedor] = useState<Fornecedor | null>(null);
  
  // Estados de dados
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<CarrinhoCompleto | null>(null);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [reservas, setReservas] = useState<ReservaEspaco[]>([]);
  const [feirasFuturas, setFeirasFuturas] = useState<any[]>([]);
  
  // Estados de filtros
  const [filtros, setFiltros] = useState<FiltrosProdutos>({
    busca: '',
    categoria: '',
    fornecedor: '',
    precoMin: 0,
    precoMax: 0,
    ordenacao: 'recentes'
  });
  
  // Estados de filtros de pedidos
  const [pedidosFiltros, setPedidosFiltros] = useState({
    busca: '',
    status: ''
  });
  
  // Estados de filtros de reservas
  const [reservasFiltros, setReservasFiltros] = useState({
    busca: '',
    status: '',
    data: ''
  });
  
  // Estados de loading
  const [isLoadingFornecedores, setIsLoadingFornecedores] = useState(false);
  const [isLoadingProdutos, setIsLoadingProdutos] = useState(false);
  const [isLoadingCarrinho, setIsLoadingCarrinho] = useState(false);
  const [isLoadingPedidos, setIsLoadingPedidos] = useState(false);
  const [isLoadingReservas, setIsLoadingReservas] = useState(false);
  const [isLoadingFeirasFuturas, setIsLoadingFeirasFuturas] = useState(false);
  
  // Estados de erro
  const [error, setError] = useState<string | null>(null);

  // Carregar fornecedores
  const loadFornecedores = useCallback(async () => {
    try {
      setIsLoadingFornecedores(true);
      setError(null);
      const data = await getFornecedores();
      setFornecedores(data);
    } catch (err) {
      setError('Erro ao carregar fornecedores');
      console.error('Erro ao carregar fornecedores:', err);
    } finally {
      setIsLoadingFornecedores(false);
    }
  }, []);

  // Carregar produtos
  const loadProdutos = useCallback(async (filtrosAtuais?: FiltrosProdutos) => {
    try {
      setIsLoadingProdutos(true);
      setError(null);
      const data = await getProdutos(filtrosAtuais || filtros);
      setProdutos(data);
    } catch (err) {
      setError('Erro ao carregar produtos');
      console.error('Erro ao carregar produtos:', err);
    } finally {
      setIsLoadingProdutos(false);
    }
  }, [filtros]);

  // Carregar carrinho
  const loadCarrinho = useCallback(async () => {
    try {
      setIsLoadingCarrinho(true);
      setError(null);
      const data = await getCarrinho(expositoresId);
      setCarrinho(data);
    } catch (err) {
      setError('Erro ao carregar carrinho');
      console.error('Erro ao carregar carrinho:', err);
    } finally {
      setIsLoadingCarrinho(false);
    }
  }, [expositoresId]);

  // Carregar pedidos
  const loadPedidos = useCallback(async () => {
    try {
      setIsLoadingPedidos(true);
      setError(null);
      const data = await getPedidos(expositoresId);
      setPedidos(data);
    } catch (err) {
      setError('Erro ao carregar pedidos');
      console.error('Erro ao carregar pedidos:', err);
    } finally {
      setIsLoadingPedidos(false);
    }
  }, [expositoresId]);

  // Carregar reservas
  const loadReservas = useCallback(async () => {
    try {
      setIsLoadingReservas(true);
      setError(null);
      const data = await getReservas(expositoresId);
      setReservas(data);
    } catch (err) {
      setError('Erro ao carregar reservas');
      console.error('Erro ao carregar reservas:', err);
    } finally {
      setIsLoadingReservas(false);
    }
  }, [expositoresId]);

  // Carregar feiras futuras
  const loadFeirasFuturas = useCallback(async () => {
    try {
      setIsLoadingFeirasFuturas(true);
      setError(null);
      const data = await getFeirasFuturas();
      setFeirasFuturas(data);
    } catch (err) {
      setError('Erro ao carregar feiras futuras');
      console.error('Erro ao carregar feiras futuras:', err);
    } finally {
      setIsLoadingFeirasFuturas(false);
    }
  }, []);

  // Adicionar ao carrinho
  const handleAdicionarAoCarrinho = useCallback(async (produtoId: string, quantidade: number = 1) => {
    try {
      setIsLoadingCarrinho(true);
      setError(null);
      const novoCarrinho = await adicionarAoCarrinho(expositoresId, produtoId, quantidade);
      setCarrinho(novoCarrinho);
    } catch (err) {
      setError('Erro ao adicionar ao carrinho');
      console.error('Erro ao adicionar ao carrinho:', err);
    } finally {
      setIsLoadingCarrinho(false);
    }
  }, [expositoresId]);

  // Remover do carrinho
  const handleRemoverDoCarrinho = useCallback(async (produtoId: string) => {
    try {
      setIsLoadingCarrinho(true);
      setError(null);
      const novoCarrinho = await removerDoCarrinho(expositoresId, produtoId);
      setCarrinho(novoCarrinho);
    } catch (err) {
      setError('Erro ao remover do carrinho');
      console.error('Erro ao remover do carrinho:', err);
    } finally {
      setIsLoadingCarrinho(false);
    }
  }, [expositoresId]);

  // Adicionar espaço ao carrinho
  const handleAdicionarEspacoAoCarrinho = useCallback(async (feiraId: string, quantidade: number) => {
    try {
      setIsLoadingCarrinho(true);
      setError(null);
      const novoCarrinho = await adicionarEspacoAoCarrinho(expositoresId, feiraId, quantidade);
      setCarrinho(novoCarrinho);
    } catch (err) {
      setError('Erro ao adicionar espaço ao carrinho');
      console.error('Erro ao adicionar espaço ao carrinho:', err);
    } finally {
      setIsLoadingCarrinho(false);
    }
  }, [expositoresId]);

  // Remover espaço do carrinho
  const handleRemoverEspacoDoCarrinho = useCallback(async (feiraId: string) => {
    try {
      setIsLoadingCarrinho(true);
      setError(null);
      const novoCarrinho = await removerEspacoDoCarrinho(expositoresId, feiraId);
      setCarrinho(novoCarrinho);
    } catch (err) {
      setError('Erro ao remover espaço do carrinho');
      console.error('Erro ao remover espaço do carrinho:', err);
    } finally {
      setIsLoadingCarrinho(false);
    }
  }, [expositoresId]);

  // Atualizar filtros
  const updateFiltros = useCallback((novosFiltros: Partial<FiltrosProdutos>) => {
    const filtrosAtualizados = { ...filtros, ...novosFiltros };
    setFiltros(filtrosAtualizados);
    loadProdutos(filtrosAtualizados);
  }, [filtros, loadProdutos]);

  // Selecionar fornecedor
  const handleSelectFornecedor = useCallback((fornecedor: Fornecedor) => {
    setSelectedFornecedor(fornecedor);
    updateFiltros({ fornecedor: fornecedor.id });
  }, [updateFiltros]);

  // Limpar filtros
  const clearFiltros = useCallback(() => {
    const filtrosLimpos: FiltrosProdutos = {
      busca: '',
      categoria: '',
      fornecedor: '',
      precoMin: 0,
      precoMax: 0,
      ordenacao: 'recentes'
    };
    setFiltros(filtrosLimpos);
    setSelectedFornecedor(null);
    loadProdutos(filtrosLimpos);
  }, [loadProdutos]);

  // Atualizar filtros de pedidos
  const updatePedidosFiltros = useCallback((novosFiltros: Partial<typeof pedidosFiltros>) => {
    setPedidosFiltros(prev => ({ ...prev, ...novosFiltros }));
  }, []);

  // Limpar filtros de pedidos
  const clearPedidosFiltros = useCallback(() => {
    setPedidosFiltros({ busca: '', status: '' });
  }, []);

  // Atualizar filtros de reservas
  const updateReservasFiltros = useCallback((novosFiltros: Partial<typeof reservasFiltros>) => {
    setReservasFiltros(prev => ({ ...prev, ...novosFiltros }));
  }, []);

  // Limpar filtros de reservas
  const clearReservasFiltros = useCallback(() => {
    setReservasFiltros({ busca: '', status: '', data: '' });
  }, []);

  // Mudar seção
  const handleSectionChange = useCallback((section: typeof activeSection) => {
    setActiveSection(section);
    setError(null);
    
    // Carregar dados específicos da seção
    switch (section) {
      case 'produtos':
        loadFornecedores();
        loadProdutos();
        break;
      case 'carrinho':
        loadCarrinho();
        break;
      case 'pedidos':
        loadPedidos();
        break;
      case 'reservas':
        loadReservas();
        break;
    }
  }, [loadFornecedores, loadProdutos, loadCarrinho, loadPedidos, loadReservas]);

  // Carregar dados iniciais
  useEffect(() => {
    loadFeirasFuturas();
  }, [loadFeirasFuturas]);

  return {
    // Estados
    activeSection,
    selectedFornecedor,
    fornecedores,
    produtos,
    carrinho,
    pedidos,
    reservas,
    feirasFuturas,
    filtros,
    pedidosFiltros,
    reservasFiltros,
    isLoadingFornecedores,
    isLoadingProdutos,
    isLoadingCarrinho,
    isLoadingPedidos,
    isLoadingReservas,
    isLoadingFeirasFuturas,
    error,
    
    // Ações
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
  };
}; 