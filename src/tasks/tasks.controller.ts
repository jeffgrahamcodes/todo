import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { UserController } from '../user.controller';
import { TaskModel } from './task.schema';
import { PartialTaskWithId, Task } from './task.interface';

@injectable()
export class TasksController {
  constructor(
    @inject(UserController) private userController: UserController
  ) {}

  public async handleGetTasks(req: Request, res: Response) {
    const tasks = await TaskModel.find();
    return tasks;
  }

  public async handlePostTasks(
    req: Request<{}, {}, Task>,
    res: Response
  ) {
    const task: Document<unknown, any, Task> = new TaskModel(
      req.body
    );

    await task.save();

    return task;
  }

  public async handlePatchTasks(
    req: Request<{}, {}, PartialTaskWithId>,
    res: Response
  ) {
    const task = await TaskModel.findById(req.body._id);

    if (task) {
      task.title = req.body.title ? req.body.title : task.title;
      task.description = req.body.description
        ? req.body.description
        : task.description;
      task.status = req.body.status ? req.body.status : task.status;
      task.priority = req.body.priority
        ? req.body.priority
        : task.priority;
      task.dueDate = req.body.dueDate
        ? req.body.dueDate
        : task.dueDate;

      await task.save();
    }

    return task;
  }
}
