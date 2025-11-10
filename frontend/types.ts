export interface NutritionalInfo {
  calorias: string;
  gorduras: string;
  carboidratos: string;
  proteinas: string;
}

export interface Product {
  id: number;
  nome: string;
  sabor: string;
  preço: string;
  imagem: string;
  descrição: string;
  rating: number;
  nutritionalInfo: NutritionalInfo;
  alergenos: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}