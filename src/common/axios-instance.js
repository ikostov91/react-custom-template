import axios from 'axios';

import AxiosMockAdapter from 'axios-mock-adapter';
import { isDevelopment } from '../helpers/environment';

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();

const routeParams = {
  ":userId": "[0-9]{1,8}",
};

export const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 }, routeParams);
export default isDevelopment() ? axiosMockInstance : axiosLiveInstance;
