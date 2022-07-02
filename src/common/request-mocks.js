import { axiosMockAdapterInstance } from "./axios-instance";
import { apiUrl } from './requests';

axiosMockAdapterInstance.onPost(`${apiUrl}/account/login`).reply(config => {
  const response = {
    trolo: 'ALA BALA'
  }
  return [200, response];
});
