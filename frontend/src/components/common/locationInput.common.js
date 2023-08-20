import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput } from 'react-native-paper';

const GOOGLE_PLACES_API_KEY = 'REDACTED';

export default function LocationInput({ label, onLocationChange, style }) {
  const [location, setLocation] = useState('');

  function handleLocationChange(text) {
    setLocation(text);
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
        console.log(
          `${label} location updated: ${JSON.stringify(
            details.geometry.location
          )}`
        );
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
