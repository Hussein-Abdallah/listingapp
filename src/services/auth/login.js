import Client from '../client';

const login = (email, password) => {
  return Client.post('/auth', { email, password });
};

export default { login };
