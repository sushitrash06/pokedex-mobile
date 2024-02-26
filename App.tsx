import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './app/Page/Home';
import ButtonComponent from './app/Component/Atoms/Button';
import { MaterialIcons } from '@expo/vector-icons';
import FavoritePage from './app/Page/Favorite';

interface AppNavigatorParams {
  initialRouteName: string;
  [key: string]: any; 
}

const Stack = createNativeStackNavigator<AppNavigatorParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={({ navigation }) => ({
            headerTitle: 'Home',
            headerTitleAlign: 'center',
            headerRight: () => (
              <ButtonComponent 
                type='transparent' 
                Icon={<MaterialIcons name="favorite-border" size={24} color="black" />} 
                onPress={() => navigation.navigate('Favorite')}
              />
            ),
          })}
        />
          
        <Stack.Screen 
          name="Favorite" 
          component={FavoritePage} 
          options={({ navigation }) => ({
            headerTitle: 'Favorite',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <ButtonComponent 
                type='transparent' 
                Icon={<MaterialIcons name="keyboard-arrow-left" size={24} color="black" />} 
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
