import axios from 'axios';

import AxiosMockAdapter from 'axios-mock-adapter';
import { isDevelopment } from '../helpers/environment';

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();

export const axiosMockAdapterInstance= new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });
export default isDevelopment() ? axiosMockInstance : axiosLiveInstance;
