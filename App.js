import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import 'react-native-gesture-handler';

// local components and packages
import { Context, Provider } from './components/global_context/GlobalContext';
import Navigator from './components/navigation/Navigator';

export default function App(props) {
  return (
    <Provider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  )
}