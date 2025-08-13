import { RoomData, CalculationResult } from '@/types';
import { products, insulationMaterials } from '@/data/products';

export class ColdRoomCalculator {
  static calculateMaxStorageCapacity(roomData: RoomData): number {
    const product = products.find(p => p.id === roomData.product);
    if (!product) return 0;
    
    const roomVolume = roomData.length * roomData.width * roomData.height;
    const storageEfficiency = 0.7; // 70% of room volume can be used for storage
    const maxCapacity = roomVolume * product.density * storageEfficiency;
    
    return maxCapacity;
  }

  static calculateCoolingLoad(data: RoomData): CalculationResult {
    // Get insulation material properties
    const insulationMaterial = insulationMaterials.find(
      mat => mat.value === data.insulationMaterial
    );
    const thermalConductivity = insulationMaterial?.thermalConductivity || 0.035;

    // Calculate room surface area
    const wallArea = 2 * (data.length * data.height + data.width * data.height);
    const ceilingArea = data.length * data.width;
    const floorArea = data.floorInsulation ? data.length * data.width : 0;
    const totalArea = wallArea + ceilingArea + floorArea;

    // Temperature difference using actual room and outside temperatures
    const tempDifference = data.outsideTemperature - data.roomTemperature;

    // Transmission losses (W)
    const uValue = thermalConductivity / (data.thickness / 1000); // Convert mm to m
    const transmissionLosses = totalArea * uValue * tempDifference;

    // Ventilation losses with factor
    const roomVolume = data.length * data.width * data.height;
    let ventilationFactor = 0.5; // Default moderate
    if (data.ventilationLossFactor === 'light') ventilationFactor = 0.3;
    if (data.ventilationLossFactor === 'high') ventilationFactor = 0.8;
    
    const airChanges = ventilationFactor;
    const ventilationLosses = roomVolume * airChanges * 1.2 * 1.005 * tempDifference / 3600 * 1000;

    // Product cooling load
    const productMass = data.storageQuantity;
    const product = products.find(p => p.id === data.product);
    const specificHeat = product?.specificHeat || 3.0;
    const tempDrop = data.enteringTemperature - data.roomTemperature;
    const coolingDown = (productMass * specificHeat * tempDrop * 1000) / (data.coolDownTime * 3600);

    // Other heat sources
    const runningFactor = data.runningTime / 24;
    const loadingFactor = data.loadingPercentage / 100;
    
    const coolerFansLoad = (data.coolerFans * data.coolerFansWorkingTime) / 24 * runningFactor;
    const illuminationLoad = (data.illumination * data.illuminationWorkingTime) / 24 * runningFactor;
    const personsLoad = (data.persons * 150 * data.personsWorkingTime) / 24 * runningFactor; // 150W per person
    const otherLoad = (data.otherHeatSources * data.otherHeatSourcesWorkingTime) / 24 * runningFactor;
    
    const otherHeatSources = coolerFansLoad + illuminationLoad + personsLoad + otherLoad;

    // Calculate totals
    const subtotal = (transmissionLosses + ventilationLosses + otherHeatSources + coolingDown) * loadingFactor;
    const safetyFactor = 1.2; // 20% safety margin
    const requiredCapacity = subtotal * safetyFactor / 1000; // Convert to kW
    const totalSpecificCapacity = requiredCapacity * 1000 / totalArea; // W/m²

    return {
      transmissionLosses,
      ventilationLosses,
      otherHeatSources,
      coolingDown,
      subtotal,
      requiredCapacity,
      totalSpecificCapacity
    };
  }
}