import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from 'src/screens/Welcome';
import Login from 'src/screens/Auth/Login';
import Register from 'src/screens/Auth/Register';

const Stack = createNativeStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='WelcomeScreen'
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
