import { Router, Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { TasksController } from './tasks.controller';

@injectable()
export class TasksRouter {
  public router: Router;

  constructor(
    @inject(TasksController) private taskController: TasksController
  ) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', (req: Request, res: Response) => {
      const newTask = this.taskController.handleGetTasks();
      res.json(newTask);
    });

    this.router.post('/create', (req: Request, res: Response) => {
      const newTask = this.taskController.handlePostTasks();
      res.json(newTask);
    });

    this.router.patch('/update', (req: Request, res: Response) => {
      const newTask = this.taskController.handlePatchTasks();
      res.json(newTask);
    });
  }
}
