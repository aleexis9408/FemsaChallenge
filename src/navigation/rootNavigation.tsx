import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {PointList} from '../screens/pointList/pointList';

export type RootNavigationProps = {
  pointList: undefined;
  PointDetail: {
    uri: string;
  };
};

const Stack = createNativeStackNavigator<RootNavigationProps>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="pointList"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="pointList" component={PointList} />
        <Stack.Screen name="PointDetail" component={PointList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
