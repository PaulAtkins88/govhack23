import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LocationInput from '../common/locationInput.common';

const LocationInputs = ({ onCurrentLocationChange, onDestinationChange }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  // there should be no space between the components
  const styles = StyleSheet.create({
    container: {
      // flex: 2,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      height: 300
    },
    locationInput: {
      width: '100%'
    }
  });

  function handleCurrentLocationChange(newLocation) {
    setCurrentLocation(newLocation);
    onCurrentLocationChange(newLocation);
  }

  function handleDestinationChange(newLocation) {
    setDestination(newLocation);
    onDestinationChange(newLocation);
  }

  return (
    <View style={styles.container}>
      <LocationInput
        label='Current Location'
        onLocationChange={handleCurrentLocationChange}
        style={{ ...styles.locationInput, zIndex: 1 }}
      />
      <LocationInput
        label='Destination'
        onLocationChange={handleDestinationChange}
        style={{ ...styles.locationInput, zIndex: 1 }}
      />
    </View>
  );
};

export default LocationInputs;
