import { authRepo } from './auth.repo';
import { ILoginPayload } from './auth.types';

// This is modules .service file, it is used as a data controller, and also as another step of apiCall abstraction
// if u need to parse some payload data after getting it from component, this is the place to do it
// This way it ensures that component data state is strongly coupled with API data structure

class AuthService {
  // Api abstraction methods
  private formatLoginPayload(payload: ILoginPayload) {
    // usually do something
    return payload;
  }

  // You dont have to set type for service function if you set the type of repo function that it returns
  // TS is smart enough to infer types in situation like that
  logIn(payload: ILoginPayload) {
    return authRepo.logIn(this.formatLoginPayload(payload));
  }

  logOut() {
    return authRepo.logOut();
  }

  // service helper methods

  formatUsername(username: string) {
    return username.toUpperCase();
  }
}

export const authService = new AuthService();
