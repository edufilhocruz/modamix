export function useUserLevel(points: number) {
  if (points >= 20000) return "Diamante";
  if (points >= 10000) return "Ouro";
  if (points >= 5000) return "Prata";
  return "Bronze";
} 