import React, { createContext, useState, ReactNode } from 'react';
import { RoomData, UnitSettings } from '@/types';

interface AppContextType {
  roomData: RoomData;
  setRoomData: React.Dispatch<React.SetStateAction<RoomData>>;
  unitSettings: UnitSettings;
  setUnitSettings: React.Dispatch<React.SetStateAction<UnitSettings>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [roomData, setRoomData] = useState<RoomData>({
    roomTemperature: 2.00,
    outsideTemperature: 25.00,
    ventilationLossFactor: 'moderate',
    runningTime: 24,
    loadingPercentage: 80,
    length: 16.40,
    width: 16.40,
    height: 9.84,
    insulationMaterial: 'polystyrene',
    thickness: 5.91,
    floorInsulation: false,
    floorThickness: 2.0,
    product: 'dairy-butter',
    storageQuantity: 15000.00,
    stockShift: 1500.00,
    enteringTemperature: 8.00,
    coolDownTime: 6,
    coolerFans: 250.00,
    coolerFansWorkingTime: 20,
    illumination: 15.00,
    illuminationWorkingTime: 8,
    persons: 2,
    personsWorkingTime: 8,
    otherHeatSources: 230.00,
    otherHeatSourcesWorkingTime: 0,
  });

  const [unitSettings, setUnitSettings] = useState<UnitSettings>({
    temperature: 'celsius',
    power: 'kw',
    distanceSmall: 'inch',
    distanceLarge: 'foot',
    weight: 'kg',
    system: 'si',
    language: 'english',
  });

  return (
    <AppContext.Provider value={{
      roomData,
      setRoomData,
      unitSettings,
      setUnitSettings,
    }}>
      {children}
    </AppContext.Provider>
  );
}