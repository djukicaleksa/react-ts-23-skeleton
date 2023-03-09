// This is module .types file, here we store all module related interfaces, types etc

// we use I to prefix interfaces, T to prefix types since often we can confuse interface with actual object naming
export interface ILoginPayload {
  username: string;
  password: string;
  remember_me?: boolean;
}

export interface ILoginResponse {
  success: boolean;
}
