import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {pointWelcome} from '../screens/pointWelcome/pointWelcome';

export type RootNavigationProps = {
  pointWelcome: undefined;
  PointDetail: {
    uri: string;
  };
};

const Stack = createNativeStackNavigator<RootNavigationProps>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="pointWelcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="pointWelcome" component={pointWelcome} />
        <Stack.Screen name="PointDetail" component={pointWelcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
