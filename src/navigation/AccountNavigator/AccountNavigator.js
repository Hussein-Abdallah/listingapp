import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Account from 'src/screens/Account';
import Messages from 'src/screens/Messages';

const Stack = createNativeStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Account' component={Account} />
      <Stack.Screen name='Messages' component={Messages} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
