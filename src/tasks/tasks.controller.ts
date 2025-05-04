import { injectable, inject } from 'inversify';
import { UserController } from '../user.controller';

@injectable()
export class TasksController {
  constructor(
    @inject(UserController) private userController: UserController
  ) {}

  public handleGetTasks() {
    return [
      {
        title: 'Task Title',
        description: 'Task Description',
      },
    ];
  }

  public handlePostTasks() {
    console.log(this.userController.getUser());
    return {
      title: 'Task Title',
      description: 'Task Description',
    };
  }

  public handlePatchTasks() {
    return {
      title: 'Task Title',
      description: 'Task Description',
    };
  }
}
