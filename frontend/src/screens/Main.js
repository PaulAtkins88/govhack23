import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, Text, Title, useTheme } from 'react-native-paper';
import LocationInputs from '../components/locationInputs/LocationInputs';
import { getAll } from '../data/repository/locations.repository';

const Main = ({ navigation }) => {
  const theme = useTheme();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  function handleCurrentLocationChange(newLocation) {
    setCurrentLocation(newLocation);
  }
  function handleDestinationChange(newLocation) {
    setDestination(newLocation);
  }
  //Hardcode some items for now
  const items = ['One', 'Two', 'Three'];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item)}>
      <Card style={styles.card} onPress={() => console.log(item)}>
        <Title style={styles.title}>{item.name}</Title>
        <Paragraph style={styles.paragraph}>Name: {item.name}</Paragraph>
        <Paragraph style={styles.paragraph}>
          Category: {item.category}
        </Paragraph>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={theme.heading}>Journey SA</Text>
      <LocationInputs
        onCurrentLocationChange={handleCurrentLocationChange}
        onDestinationChange={handleDestinationChange}
      />
      <View style={styles.listWrapper}>
        <FlatList
          data={getAll()}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  listWrapper: {
    flex: 0.8, // 80% height for the list
    justifyContent: 'center'
  },
  button: {
    marginBottom: 10
  },
  card: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginBottom: 10,
    overflow: 'hidden'
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Add text shadow
    textShadowOffset: { width: 0, height: 1 }, // Add text shadow
    textShadowRadius: 1 // Add text shadow
  },

  createdAtText: {
    // Style for created at text
    color: '#777',
    fontSize: 12,
    textAlign: 'right',
    paddingRight: 8,
    paddingBottom: 4
  },
  paragraph: {
    textAlign: 'center', // Center the 'added on' label
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a background to improve readability
    paddingVertical: 4 // Add some padding
  },
  flatList: {
    flexGrow: 1,
    marginBottom: 10 // Add margin to the bottom of the FlatList
  }
});

export default Main;
