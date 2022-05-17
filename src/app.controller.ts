import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService, ITodo } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodo() {
    return this.appService.todoList();
  }

  @Post()
  createTodo(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.appService.createTodo({ title, description });
  }

  @Patch()
  updateTodo() {
    return 'Update todo some field';
  }

  @Put()
  updateTodos() {
    return 'Update todo many field';
  }

  @Delete()
  deleteTodo() {
    return 'Delete todo';
  }
}
