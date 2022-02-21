import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from 'src/navigation/AppNavigator';
import AuthNavigator from 'src/navigation/AuthNavigator';

import OfflineNotice from 'components/general/OfflineNotice';

import AuthContext from 'services/auth/context';
import authStorage from 'services/auth/storage';

import navigationTheme from 'styles/navigationStyles/navigationTheme';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    restoreUser();
    setIsReady(true);
  }, []);
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) return <AppLoading />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
