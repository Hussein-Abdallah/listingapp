import Client from '../client';

const register = (userInfo) => Client.post('/users', userInfo);

export default { register };
