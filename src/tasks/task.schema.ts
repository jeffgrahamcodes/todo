import { Schema, Model, model } from 'mongoose';
import { Task } from './task.interface';

const taskSchema: Schema<Task> = new Schema(
  {
    title: {
      type: 'String',
      required: [true, 'Title required for task'],
      maxlength: [100, 'Title cannot be longer than 100 characters'],
      trim: true,
    },
    description: {
      type: 'String',
      required: [true, 'Description required for task'],
      maxlength: [
        500,
        'Description cannot be longer than 500 characters',
      ],
      trim: true,
    },
    status: {
      type: 'String',
      required: true,
      enum: ['todo', 'inProgress', 'completed'],
      default: 'todo',
    },
    priority: {
      type: 'String',
      required: true,
      enum: ['low', 'normal', 'high'],
      default: 'normal',
    },
    dueDate: {
      type: 'Date',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TaskModel: Model<Task> = model('Task', taskSchema);
