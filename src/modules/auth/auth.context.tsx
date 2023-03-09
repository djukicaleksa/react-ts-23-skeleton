// This is example context file, it should be used to avoid prop drilling from, managing state with no or small amount of side effects, or global app state (ie. login status, role etc)
// !!! IMPORTANT NOTICE: on context update, every context consumer component is re-rendered, which can cause serious ux issues
// For complex state management we should use some state management lib like redux/mobx

import React, { createContext, useState } from 'react';

export enum USER_ROLES {
  KONTROLOR = 'ktrl',
  MUP_ADMIN = 'madm',
  PODRUCNI_SLUZBENIK = 'podsluz',
  ABS_ADMIN = 'absad',
}

interface AuthContextState {
  loggedIn: boolean;
  role: USER_ROLES | null;
}

export type UpdateAuthStateFunction = (updatedState: Partial<AuthContextState>) => void;

export interface ModalContextProviderProps {
  children: JSX.Element;
}

const initialState = (): AuthContextState => ({
  loggedIn: !!localStorage.getItem('token'),
  role: null,
});

export const AuthContext = createContext<{
  auth: AuthContextState;
  setAuth: UpdateAuthStateFunction;
  clearAuth: any;
}>(null as any);

export const AuthContextProvider = ({ children }: ModalContextProviderProps) => {
  const [auth, setAuth] = useState(initialState());

  const handleUpdatAauth = (updatedState: Partial<AuthContextState>) => {
    setAuth({ ...auth, ...updatedState });
  };

  const clearAuth = () => {
    setAuth(initialState());
  };
  return <AuthContext.Provider value={{ auth, setAuth: handleUpdatAauth, clearAuth }}>{children}</AuthContext.Provider>;
};
