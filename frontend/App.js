import React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider
} from 'react-native-paper';
import Main from './src/screens/Main';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    tertiary: '#ff71ce',
    primary: '#01cdfe',
    secondary: '#05ffa1'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#14cfc9',
    marginTop: 40
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      {/* <AppNavigator /> */}
      <Main />
    </PaperProvider>
  );
}
