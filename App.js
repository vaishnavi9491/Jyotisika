import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Ensure this is imported
import App_Navigation from './src/Navigation/App_Navigation';



const App = () => {
  return (
    <NavigationContainer>
      < App_Navigation/>
    </NavigationContainer>
  );
};

export default App;
