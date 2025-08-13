import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '@/components/InputField';
import { AppContext } from '@/context/AppContext';

export default function HeatScreen() {
  const { roomData, setRoomData, unitSettings } = useContext(AppContext);

  const updateRoomData = (field: string, value: any) => {
    setRoomData(prev => ({ ...prev, [field]: value }));
  };

  const powerUnit = unitSettings.power === 'kw' ? 'Watt' : unitSettings.power.toUpperCase();

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

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <InputField
              label="Cooler fans"
              value={roomData.coolerFans.toString()}
              onChangeText={(text) => updateRoomData('coolerFans', parseFloat(text) || 0)}
              unit={powerUnit}
              placeholder="250.00"
            />
          </View>
          <View style={styles.halfWidth}>
            <InputField
              label="Working time"
              value={roomData.coolerFansWorkingTime.toString()}
              onChangeText={(text) => updateRoomData('coolerFansWorkingTime', parseFloat(text) || 0)}
              unit="Hrs/day"
              placeholder="20"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <InputField
              label="Illumination"
              value={roomData.illumination.toString()}
              onChangeText={(text) => updateRoomData('illumination', parseFloat(text) || 0)}
              unit="Watt/m²"
              placeholder="15.00"
            />
          </View>
          <View style={styles.halfWidth}>
            <InputField
              label=""
              value={roomData.illuminationWorkingTime.toString()}
              onChangeText={(text) => updateRoomData('illuminationWorkingTime', parseFloat(text) || 0)}
              unit="Hrs/day"
              placeholder="8"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <InputField
              label="Persons"
              value={roomData.persons.toString()}
              onChangeText={(text) => updateRoomData('persons', parseFloat(text) || 0)}
              placeholder="2"
            />
          </View>
          <View style={styles.halfWidth}>
            <InputField
              label=""
              value={roomData.personsWorkingTime.toString()}
              onChangeText={(text) => updateRoomData('personsWorkingTime', parseFloat(text) || 0)}
              unit="Hrs/day"
              placeholder="8"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <InputField
              label="Other heat sources"
              value={roomData.otherHeatSources.toString()}
              onChangeText={(text) => updateRoomData('otherHeatSources', parseFloat(text) || 0)}
              unit={powerUnit}
              placeholder="230.00"
            />
          </View>
          <View style={styles.halfWidth}>
            <InputField
              label=""
              value={roomData.otherHeatSourcesWorkingTime.toString()}
              onChangeText={(text) => updateRoomData('otherHeatSourcesWorkingTime', parseFloat(text) || 0)}
              unit="Hrs/day"
              placeholder="0"
            />
          </View>
        </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  halfWidth: {
    width: '48%',
  },
});