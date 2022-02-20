import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Listing from 'src/screens/Feed/Listing';
import Listings from 'src/screens/Feed/Listings';

const Stack = createNativeStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: 'modal', headerShown: false }}
    >
      <Stack.Screen name='Listings' component={Listings} />
      <Stack.Screen name='Listing' component={Listing} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
