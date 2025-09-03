export interface Pokemon {
  id: string;
  name: string;
  hp?: string; // Optionnel car pas tous les Pokemon ont des HP
  images: {
    small: string;
    large: string;
  };
  // Propriétés supplémentaires de l'API Pokemon TCG
  supertype?: string;
  subtypes?: string[];
  types?: string[];
  rarity?: string;
  set?: {
    id: string;
    name: string;
  };
}
