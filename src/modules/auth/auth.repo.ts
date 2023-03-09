import { ILoginPayload } from './auth.types';

// This is modules .repo file, it only should serve to abstract api calls,
//  usually you import axios instance here which is preconfigured with baseURL,
//  requestHeaders and other required configurations (if any)

const logIn = (payload: ILoginPayload) => {
  // MOCK API CALL
  // return axios.post('urlPath', payload)
  console.log(payload);

  return Promise.resolve({ status: 'success' });
};

const logOut = () => {
  // MOCK API CALL
  // return axios.post('urlPath')
  return Promise.resolve({ status: 'success' });
};

// Synthatic sugar to decouple function declaration and object grouping
export const authRepo = {
  logIn,
  logOut,
};
