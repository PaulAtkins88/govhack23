import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput } from 'react-native-paper';

const GOOGLE_PLACES_API_KEY = 'AIzaSyDgzgT_3aZJ_a1lWK_juF-Zn5x-Wy8nTB8';

export default function LocationInput({ label, onLocationChange, style }) {
  const [location, setLocation] = useState('');

  function handleLocationChange(text) {
    const newLocation = text;
    setLocation(newLocation);
    console.log(location);
  }

  return (
    <GooglePlacesAutocomplete
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en'
      }}
      onPress={(data, details) => {
        setLocation(data.description);
        onLocationChange(details.geometry.location);
      }}
      textInputProps={{
        InputComp: TextInput,
        label,
        type: 'text',
        defaultValue: 'Enter a location',
        onChangeText: handleLocationChange,
        style: style
      }}
      placeholder='Search'
      fetchDetails={true}
    />
  );
}
