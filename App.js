import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from 'styles/navigationStyles/navigationTheme';
import AppNavigator from 'src/navigation/AppNavigator';
import OfflineNotice from 'components/general/OfflineNotice';
export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
