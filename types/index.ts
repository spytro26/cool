export interface Product {
  id: string;
  name: string;
  category: string;
  density: number; // kg/m³
  recommendedTemp: number; // in Celsius
  specificHeat: number; // kJ/kg·K
  respirationHeat: number; // W/kg
}

export interface UnitSettings {
  temperature: 'celsius' | 'fahrenheit' | 'kelvin';
  power: 'kw' | 'btu' | 'r' | 'kcal' | 'horsepower';
  distanceSmall: 'inch' | 'millimeter';
  distanceLarge: 'foot' | 'meter';
  weight: 'kg' | 'pound';
  system: 'si' | 'imperial';
}

export interface RoomData {
  roomTemperature: number;
  outsideTemperature: number;
  ventilationLossFactor: 'light' | 'moderate' | 'high';
  runningTime: number;
  loadingPercentage: number;
  length: number;
  width: number;
  height: number;
  insulationMaterial: string;
  thickness: number;
  floorInsulation: boolean;
  floorThickness: number;
  floorThickness: number;
  product: string;
  storageQuantity: number;
  stockShift: number;
  enteringTemperature: number;
  coolDownTime: number;
  coolerFans: number;
  coolerFansWorkingTime: number;
  illumination: number;
  illuminationWorkingTime: number;
  persons: number;
  personsWorkingTime: number;
  otherHeatSources: number;
  otherHeatSourcesWorkingTime: number;
}

export interface CalculationResult {
  transmissionLosses: number;
  ventilationLosses: number;
  otherHeatSources: number;
  coolingDown: number;
  respirationHeat: number;
  subtotal: number;
  requiredCapacity: number;
  totalSpecificCapacity: number;
}