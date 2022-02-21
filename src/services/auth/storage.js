import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';
const key = 'authToken_Key';
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error storing the authtoken', error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the AuthToken', error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth Token');
  }
};

export default { getToken, getUser, storeToken, removeToken };
