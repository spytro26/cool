import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '@/components/InputField';
import { Dropdown } from '@/components/Dropdown';
import { products } from '@/data/products';
import { AppContext } from '@/context/AppContext';

export default function ProductScreen() {
  const { roomData, setRoomData, unitSettings } = useContext(AppContext);
  const { ColdRoomCalculator } = require('@/utils/calculations');

  const updateRoomData = (field: string, value: any) => {
    setRoomData(prev => ({ ...prev, [field]: value }));
  };

  const selectedProduct = products.find(p => p.id === roomData.product);
  const maxStorageCapacity = ColdRoomCalculator.calculateMaxStorageCapacity(roomData);
  const weightUnit = unitSettings.weight === 'kg' ? 'kg' : 'lb';
  const tempUnit = unitSettings.temperature === 'celsius' ? '°C' : 
                   unitSettings.temperature === 'fahrenheit' ? '°F' : 'K';

  const productOptions = products.map(product => ({
    label: product.name,
    value: product.id
  }));

  return (
    <LinearGradient
      colors={['#1e3a8a', '#3b82f6']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>LU-VE</Text>
          <Text style={styles.logoSubtext}>GROUP</Text>
          <Text style={styles.title}>Cold Room Calculator</Text>
        </View>

        <Dropdown
          label="Products"
          options={productOptions}
          value={roomData.product}
          onSelect={(value) => updateRoomData('product', value)}
          placeholder="Dairy butter"
        />

        {selectedProduct && (
          <View style={styles.productInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Max. allowed storage</Text>
              <Text style={styles.infoValue}>
                {maxStorageCapacity.toFixed(2)} {weightUnit}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Recomm. storage temp.</Text>
              <Text style={styles.infoValue}>
                {selectedProduct.recommendedTemp.toFixed(2)} {tempUnit}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Product density</Text>
              <Text style={styles.infoValue}>
                {selectedProduct.density} kg/m³
              </Text>
            </View>
          </View>
        )}

        <InputField
          label="Storage quantity"
          value={roomData.storageQuantity.toString()}
          onChangeText={(text) => updateRoomData('storageQuantity', parseFloat(text) || 0)}
          unit={weightUnit}
          placeholder="15000.00"
        />

        <InputField
          label="Stock shift"
          value={roomData.stockShift.toString()}
          onChangeText={(text) => updateRoomData('stockShift', parseFloat(text) || 0)}
          unit={weightUnit}
          placeholder="1500.00"
        />

        <InputField
          label="Entering temperature"
          value={roomData.enteringTemperature.toString()}
          onChangeText={(text) => updateRoomData('enteringTemperature', parseFloat(text) || 0)}
          unit={tempUnit}
          placeholder="8.00"
        />

        <InputField
          label="Cool down/congel. time"
          value={roomData.coolDownTime.toString()}
          onChangeText={(text) => updateRoomData('coolDownTime', parseFloat(text) || 0)}
          unit="hr"
          placeholder="6"
        />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  logoSubtext: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  productInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#E5E7EB',
  },
  infoValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});