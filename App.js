/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/store/reducers/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Phones from './src/screens/phones';
import PhoneView from './src/screens/phoneView';

const store = createStore(reducers, applyMiddleware(thunk))

const Stack = createStackNavigator();

function App(){
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="catelog" component={Phones} />
          <Stack.Screen name="product" component={PhoneView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
