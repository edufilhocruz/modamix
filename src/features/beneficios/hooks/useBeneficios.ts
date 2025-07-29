import { beneficiosService } from "../services/beneficiosService";
import { BeneficioAcao, BeneficioRecompensa, BeneficioNivel, BeneficioBonus, BeneficioExtra } from "../types/beneficios";

/**
 * Hook para acessar os dados dos benefícios.
 * Pronto para trocar por react-query/API futuramente.
 */
export function useBeneficios() {
  return {
    acoes: beneficiosService.getAcoes(),
    recompensas: beneficiosService.getRecompensas(),
    niveis: beneficiosService.getNiveis(),
    bonuses: beneficiosService.getBonuses(),
    extras: beneficiosService.getExtras,
  };
} 