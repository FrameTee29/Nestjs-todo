import { Injectable } from '@nestjs/common';

export interface ITodo {
  id?: number;
  title: string;
  description: string;
}

const todo: ITodo[] = [{ id: 1, title: 'nestJs', description: 'CRUD' }];

@Injectable()
export class AppService {
  todoList(): ITodo[] {
    return todo;
  }

  createTodo(body: ITodo): ITodo[] {
    todo.push({ ...body, id: Date.now() });
    return todo;
  }
}
