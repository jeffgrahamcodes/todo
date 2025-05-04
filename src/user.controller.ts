import { injectable } from 'inversify';

@injectable()
export class UserController {
  constructor() {}

  public getUser() {
    return {
      firstName: 'Jeff',
      lastName: 'Graham',
      email: 'jeffgrahamcodes@gmail.com',
    };
  }
}
