import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Ensure this is imported
import App_Navigation from './src/Navigation/App_Navigation';
import { Provider } from 'react-redux';
import i18n from '../Jyotisika/src/Component/i18n';
import store from './src/Redux/store';


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      < App_Navigation/>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
