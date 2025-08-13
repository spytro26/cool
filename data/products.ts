import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'dairy-butter',
    name: 'Dairy butter',
    category: 'dairy',
    maxAllowedStorage: 48000,
    recommendedTemp: 2.0,
    specificHeat: 2.9
  },
  {
    id: 'dairy-cheese-fat',
    name: 'Dairy cheese fat',
    category: 'dairy',
    maxAllowedStorage: 45000,
    recommendedTemp: 4.0,
    specificHeat: 3.1
  },
  {
    id: 'dairy-cheese-lean',
    name: 'Dairy cheese lean',
    category: 'dairy',
    maxAllowedStorage: 42000,
    recommendedTemp: 4.0,
    specificHeat: 3.4
  },
  {
    id: 'dairy-curd',
    name: 'Dairy curd',
    category: 'dairy',
    maxAllowedStorage: 40000,
    recommendedTemp: 2.0,
    specificHeat: 3.6
  },
  {
    id: 'dairy-margarine',
    name: 'Dairy margarine',
    category: 'dairy',
    maxAllowedStorage: 46000,
    recommendedTemp: 5.0,
    specificHeat: 2.8
  },
  {
    id: 'dairy-mean-value',
    name: 'Dairy mean value',
    category: 'dairy',
    maxAllowedStorage: 44000,
    recommendedTemp: 3.0,
    specificHeat: 3.2
  },
  {
    id: 'dairy-milk',
    name: 'Dairy milk',
    category: 'dairy',
    maxAllowedStorage: 41000,
    recommendedTemp: 4.0,
    specificHeat: 3.9
  },
  {
    id: 'fish-mean-value',
    name: 'Fish mean value',
    category: 'fish',
    maxAllowedStorage: 35000,
    recommendedTemp: 0.0,
    specificHeat: 3.7
  },
  {
    id: 'fish-sea-fish-fat',
    name: 'Fish sea-fish fat',
    category: 'fish',
    maxAllowedStorage: 38000,
    recommendedTemp: -1.0,
    specificHeat: 3.2
  },
  {
    id: 'fish-sea-fish-smoked',
    name: 'Fish sea fish smoked',
    category: 'fish',
    maxAllowedStorage: 32000,
    recommendedTemp: 2.0,
    specificHeat: 2.8
  },
  {
    id: 'fish-shell-fish',
    name: 'Fish shell-fish',
    category: 'fish',
    maxAllowedStorage: 30000,
    recommendedTemp: 1.0,
    specificHeat: 3.5
  },
  {
    id: 'fruits-pineapple',
    name: 'Fruits pineapple',
    category: 'fruits',
    maxAllowedStorage: 25000,
    recommendedTemp: 7.0,
    specificHeat: 3.8
  },
  {
    id: 'fruits-apple',
    name: 'Fruits apple',
    category: 'fruits',
    maxAllowedStorage: 28000,
    recommendedTemp: 1.0,
    specificHeat: 3.6
  },
  {
    id: 'fruits-apricots',
    name: 'Fruits apricots',
    category: 'fruits',
    maxAllowedStorage: 26000,
    recommendedTemp: 0.0,
    specificHeat: 3.7
  },
  {
    id: 'fruits-banana',
    name: 'Fruits banana',
    category: 'fruits',
    maxAllowedStorage: 24000,
    recommendedTemp: 13.0,
    specificHeat: 3.3
  },
  {
    id: 'fruits-cherries',
    name: 'Fruits cherries',
    category: 'fruits',
    maxAllowedStorage: 27000,
    recommendedTemp: 0.0,
    specificHeat: 3.8
  },
  {
    id: 'fruits-grapes',
    name: 'Fruits grapes',
    category: 'fruits',
    maxAllowedStorage: 29000,
    recommendedTemp: 0.0,
    specificHeat: 3.5
  },
  {
    id: 'fruits-mangos',
    name: 'Fruits mangos',
    category: 'fruits',
    maxAllowedStorage: 26000,
    recommendedTemp: 10.0,
    specificHeat: 3.4
  },
  {
    id: 'fruits-mean-value',
    name: 'Fruits mean value',
    category: 'fruits',
    maxAllowedStorage: 26500,
    recommendedTemp: 2.0,
    specificHeat: 3.6
  },
  {
    id: 'fruits-melons',
    name: 'Fruits melons',
    category: 'fruits',
    maxAllowedStorage: 25500,
    recommendedTemp: 2.0,
    specificHeat: 3.9
  },
  {
    id: 'beer',
    name: 'Beer',
    category: 'beverages',
    maxAllowedStorage: 50000,
    recommendedTemp: 2.0,
    specificHeat: 4.0
  },
  {
    id: 'bread',
    name: 'Bread',
    category: 'bakery',
    maxAllowedStorage: 20000,
    recommendedTemp: -18.0,
    specificHeat: 2.5
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    category: 'confectionery',
    maxAllowedStorage: 15000,
    recommendedTemp: 15.0,
    specificHeat: 1.8
  },
  {
    id: 'cut-flowers',
    name: 'Cut flowers',
    category: 'flowers',
    maxAllowedStorage: 5000,
    recommendedTemp: 2.0,
    specificHeat: 3.8
  },
  {
    id: 'dough',
    name: 'Dough',
    category: 'bakery',
    maxAllowedStorage: 18000,
    recommendedTemp: 4.0,
    specificHeat: 3.2
  },
  {
    id: 'eggs',
    name: 'Eggs',
    category: 'dairy',
    maxAllowedStorage: 22000,
    recommendedTemp: 1.0,
    specificHeat: 3.1
  },
  {
    id: 'ice-cream',
    name: 'Ice cream',
    category: 'frozen',
    maxAllowedStorage: 35000,
    recommendedTemp: -18.0,
    specificHeat: 2.2
  },
  {
    id: 'meat-chicken',
    name: 'Meat chicken',
    category: 'meat',
    maxAllowedStorage: 38000,
    recommendedTemp: 0.0,
    specificHeat: 3.3
  },
  {
    id: 'vegetables-beans',
    name: 'Vegetables beans',
    category: 'vegetables',
    maxAllowedStorage: 30000,
    recommendedTemp: 4.0,
    specificHeat: 3.5
  },
  {
    id: 'vegetables-cabbage',
    name: 'Vegetables cabbage',
    category: 'vegetables',
    maxAllowedStorage: 32000,
    recommendedTemp: 0.0,
    specificHeat: 3.7
  }
];

export const insulationMaterials = [
  { label: 'Polystyrene', value: 'polystyrene', thermalConductivity: 0.035 },
  { label: 'Polyurethane', value: 'polyurethane', thermalConductivity: 0.025 },
  { label: 'Mineral wool', value: 'mineral-wool', thermalConductivity: 0.040 },
  { label: 'Cork', value: 'cork', thermalConductivity: 0.045 }
];