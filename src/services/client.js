import { create } from 'apisauce';
import authStorage from './auth/storage';
import cache from './cache/cache';

const apiClient = create({
  baseURL: 'http://192.168.86.64:9000/api',
});

//calling protected apis
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

// change the implemntation of get method for apiClient
// assign get to the apiClient get method
const get = apiClient.get;
// redefine the get method
apiClient.get = async (url, params, axiosConfig) => {
  // code exceuted before

  // the get method
  const response = await get(url, params, axiosConfig);

  //code executed after the get method

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
