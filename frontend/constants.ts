import type { Product } from './types';

export const PRODUCTS_DATA: Product[] = [
  { 
    id: 1, 
    nome: 'Cupcake de Chocolate', 
    sabor: 'Chocolate', 
    preço: '8.00', 
    imagem: 'https://i.imgur.com/p4rLglY.jpeg', 
    descrição: 'Massa fofinha de chocolate com uma generosa cobertura de brigadeiro cremoso e granulado.', 
    rating: 5,
    nutritionalInfo: { calorias: '350 kcal', gorduras: '18g', carboidratos: '45g', proteinas: '4g' },
    alergenos: ['Glúten', 'Leite', 'Ovos']
  },
  { 
    id: 2, 
    nome: 'Cupcake de Morango', 
    sabor: 'Morango', 
    preço: '7.50', 
    imagem: 'https://i.imgur.com/GUPqUsS.jpeg', 
    descrição: 'Massa leve de baunilha com recheio de geleia de morango caseira e cobertura de buttercream de morango.', 
    rating: 4,
    nutritionalInfo: { calorias: '320 kcal', gorduras: '15g', carboidratos: '42g', proteinas: '3g' },
    alergenos: ['Glúten', 'Leite', 'Ovos']
  },
  { 
    id: 3, 
    nome: 'Cupcake Baunilha', 
    sabor: 'Baunilha', 
    preço: '9.00', 
    imagem: 'https://i.imgur.com/M1MBaSK.jpeg', 
    descrição: 'Um clássico irresistível. Massa aveludada de baunilha com uma cobertura suave de buttercream e confeitos coloridos.', 
    rating: 5,
    nutritionalInfo: { calorias: '300 kcal', gorduras: '14g', carboidratos: '40g', proteinas: '3g' },
    alergenos: ['Glúten', 'Leite', 'Ovos']
  },
  { 
    id: 4, 
    nome: 'Cupcake de Limão', 
    sabor: 'Limão', 
    preço: '7.50', 
    imagem: 'https://i.imgur.com/9wYWjqJ.jpeg', 
    descrição: 'Massa cítrica de limão com recheio de curd de limão e uma cobertura de merengue suíço levemente tostado.', 
    rating: 4,
    nutritionalInfo: { calorias: '330 kcal', gorduras: '16g', carboidratos: '43g', proteinas: '4g' },
    alergenos: ['Glúten', 'Leite', 'Ovos']
  },
  { 
    id: 5, 
    nome: 'Cupcake Azul', 
    sabor: 'Mirtilo', 
    preço: '7.50', 
    imagem: 'https://i.imgur.com/DKd2QBl.jpeg', 
    descrição: 'Massa de baunilha recheada com mirtilos frescos, coberta com um delicioso buttercream azul de cream cheese.', 
    rating: 4,
    nutritionalInfo: { calorias: '340 kcal', gorduras: '17g', carboidratos: '44g', proteinas: '3.5g' },
    alergenos: ['Glúten', 'Leite', 'Ovos']
  },
  { 
    id: 6, 
    nome: 'Cupcake Maracujá', 
    sabor: 'Maracujá', 
    preço: '7.50', 
    imagem: 'https://i.imgur.com/KmC9clo.jpeg', 
    descrição: 'Uma explosão tropical! Massa leve com recheio de mousse de maracujá e cobertura de ganache de chocolate branco.', 
    rating: 4,
    nutritionalInfo: { calorias: '360 kcal', gorduras: '19g', carboidratos: '46g', proteinas: '4g' },
    alergenos: ['Glúten', 'Leite', 'Ovos']
  },
];