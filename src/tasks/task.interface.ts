export interface Task {
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'completed';
  priority: 'low' | 'normal' | 'high';
  dueDate: Date;
}

export interface PartialTaskWithId extends Partial<Task> {
  _id: string;
}
