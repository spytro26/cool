import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'dairy-butter',
    name: 'Dairy butter',
    category: 'dairy',
    density: 1100, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 2.9,
    respirationHeat: 0 // W/kg
  },
  {
    id: 'fruits-apple',
    name: 'Fruits apple',
    category: 'fruits',
    density: 620, // kg/m³
    recommendedTemp: 1.0,
    specificHeat: 3.6,
    respirationHeat: 0 // W/kg
  },
  {
    id: 'fruits-melons',
    name: 'Fruits melons',
    category: 'fruits',
    density: 550, // kg/m³
    recommendedTemp: 2.0,
    specificHeat: 3.9,
    respirationHeat: 0 // W/kg
  }
];

export const insulationMaterials = [
  { label: 'Polystyrene', value: 'polystyrene', thermalConductivity: 0.035 },
  { label: 'Polyurethane', value: 'polyurethane', thermalConductivity: 0.025 },
  { label: 'Mineral wool', value: 'mineral-wool', thermalConductivity: 0.040 },
  { label: 'Cork', value: 'cork', thermalConductivity: 0.045 }
];