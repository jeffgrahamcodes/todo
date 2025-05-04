import { inject, injectable } from 'inversify';

import { User } from './user';

@injectable()
export class Post {
  constructor(
    public title: string,
    public content: string,
    public user: User
  ) {}
}
