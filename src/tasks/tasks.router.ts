import { Router, Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { TasksController } from './tasks.controller';
import { PartialTaskWithId, Task } from './task.interface';

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
    this.router.get('/', async (req: Request, res: Response) => {
      const tasks = await this.taskController.handleGetTasks(
        req,
        res
      );
      res.json(tasks);
    });

    this.router.post(
      '/create',
      async (req: Request<{}, {}, Task>, res: Response) => {
        const newTask = await this.taskController.handlePostTasks(
          req,
          res
        );
        res.json(newTask);
      }
    );

    this.router.patch(
      '/update',
      async (
        req: Request<{}, {}, PartialTaskWithId>,
        res: Response
      ) => {
        const updatedTask =
          await this.taskController.handlePatchTasks(req, res);
        res.json(updatedTask);
      }
    );
  }
}
