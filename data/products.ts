import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'dairy-butter',
    name: 'Dairy butter',
    category: 'dairy',
    density: 920, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 2.9
  },
  {
    id: 'dairy-cheese-fat',
    name: 'Dairy cheese fat',
    category: 'dairy',
    density: 1100, // kg/m³
    recommendedTemp: 4.0,
    specificHeat: 3.1
  },
  {
    id: 'dairy-cheese-lean',
    name: 'Dairy cheese lean',
    category: 'dairy',
    density: 1200, // kg/m³
    recommendedTemp: 4.0,
    specificHeat: 3.4
  },
  {
    id: 'dairy-curd',
    name: 'Dairy curd',
    category: 'dairy',
    density: 1050, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 3.6
  },
  {
    id: 'dairy-margarine',
    name: 'Dairy margarine',
    category: 'dairy',
    density: 800, // kg/m³
    recommendedTemp: 5.0,
    specificHeat: 2.8
  },
  {
    id: 'dairy-mean-value',
    name: 'Dairy mean value',
    category: 'dairy',
    density: 1000, // kg/m³
    recommendedTemp: 3.0,
    specificHeat: 3.2
  },
  {
    id: 'dairy-milk',
    name: 'Dairy milk',
    category: 'dairy',
    density: 1030, // kg/m³
    recommendedTemp: 4.0,
    specificHeat: 3.9
  },
  {
    id: 'fish-mean-value',
    name: 'Fish mean value',
    category: 'fish',
    density: 1000, // kg/m³
    recommendedTemp: 0.0,
    specificHeat: 3.7
  },
  {
    id: 'fish-sea-fish-fat',
    name: 'Fish sea-fish fat',
    category: 'fish',
    density: 950, // kg/m³
    recommendedTemp: -1.0,
    specificHeat: 3.2
  },
  {
    id: 'fish-sea-fish-smoked',
    name: 'Fish sea fish smoked',
    category: 'fish',
    density: 800, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 2.8
  },
  {
    id: 'fish-shell-fish',
    name: 'Fish shell-fish',
    category: 'fish',
    density: 900, // kg/m³
    recommendedTemp: 1.0,
    specificHeat: 3.5
  },
  {
    id: 'fruits-pineapple',
    name: 'Fruits pineapple',
    category: 'fruits',
    density: 500, // kg/m³
    recommendedTemp: 7.0,
    specificHeat: 3.8
  },
  {
    id: 'fruits-apple',
    name: 'Fruits apple',
    category: 'fruits',
    density: 600, // kg/m³
    recommendedTemp: 1.0,
    specificHeat: 3.6
  },
  {
    id: 'fruits-apricots',
    name: 'Fruits apricots',
    category: 'fruits',
    density: 550, // kg/m³
    recommendedTemp: 0.0,
    specificHeat: 3.7
  },
  {
    id: 'fruits-banana',
    name: 'Fruits banana',
    category: 'fruits',
    density: 450, // kg/m³
    recommendedTemp: 13.0,
    specificHeat: 3.3
  },
  {
    id: 'fruits-cherries',
    name: 'Fruits cherries',
    category: 'fruits',
    density: 650, // kg/m³
    recommendedTemp: 0.0,
    specificHeat: 3.8
  },
  {
    id: 'fruits-grapes',
    name: 'Fruits grapes',
    category: 'fruits',
    density: 700, // kg/m³
    recommendedTemp: 0.0,
    specificHeat: 3.5
  },
  {
    id: 'fruits-mangos',
    name: 'Fruits mangos',
    category: 'fruits',
    density: 600, // kg/m³
    recommendedTemp: 10.0,
    specificHeat: 3.4
  },
  {
    id: 'fruits-mean-value',
    name: 'Fruits mean value',
    category: 'fruits',
    density: 575, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 3.6
  },
  {
    id: 'fruits-melons',
    name: 'Fruits melons',
    category: 'fruits',
    density: 400, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 3.9
  },
  {
    id: 'beer',
    name: 'Beer',
    category: 'beverages',
    density: 1000, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 4.0
  },
  {
    id: 'bread',
    name: 'Bread',
    category: 'bakery',
    density: 300, // kg/m³
    recommendedTemp: -18.0,
    specificHeat: 2.5
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    category: 'confectionery',
    density: 1200, // kg/m³
    recommendedTemp: 15.0,
    specificHeat: 1.8
  },
  {
    id: 'cut-flowers',
    name: 'Cut flowers',
    category: 'flowers',
    density: 100, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 3.8
  },
  {
    id: 'dough',
    name: 'Dough',
    category: 'bakery',
    density: 500, // kg/m³
    recommendedTemp: 4.0,
    specificHeat: 3.2
  },
  {
    id: 'eggs',
    name: 'Eggs',
    category: 'dairy',
    density: 400, // kg/m³
    recommendedTemp: 1.0,
    specificHeat: 3.1
  },
  {
    id: 'ice-cream',
    name: 'Ice cream',
    category: 'frozen',
    density: 600, // kg/m³
    recommendedTemp: -18.0,
    specificHeat: 2.2
  },
  {
    id: 'meat-chicken',
    name: 'Meat chicken',
    category: 'meat',
    density: 950, // kg/m³
    recommendedTemp: 0.0,
    specificHeat: 3.3
  },
  {
    id: 'vegetables-beans',
    name: 'Vegetables beans',
    category: 'vegetables',
    density: 800, // kg/m³
    recommendedTemp: 4.0,
    specificHeat: 3.5
  },
  {
    id: 'vegetables-cabbage',
    name: 'Vegetables cabbage',
    category: 'vegetables',
    density: 500, // kg/m³
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