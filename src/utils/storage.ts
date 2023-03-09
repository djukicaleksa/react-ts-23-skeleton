const storagePrefix = 'react_';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },

  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },

  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },

  setData: (key: string, value: string | null) => {
    return window.localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
  },

  getData: (key: string) => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}${key}`) as string);
  },
};

export default storage;
