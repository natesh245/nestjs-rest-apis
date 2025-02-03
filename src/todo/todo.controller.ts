import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoCreateRequestDto } from './dto/todo-create-request.dto/todo-create-request.dto';
import { TodoEntity } from './entity/todo.entity/todo.entity';
import { TodoUpdateRequestDto } from './dto/todo-update-request.dto/todo-update-request.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoServices: TodoService) {}
  @Post()
  public async postTodo(
    @Body() todo: TodoCreateRequestDto,
  ): Promise<TodoEntity> {
    const newTodo: TodoEntity = await this.todoServices.createTodo(todo);
    return newTodo;
  }

  @Get(':todoId')
  public async getTodoById(
    @Param('todoId') uuid: string,
  ): Promise<TodoEntity | null> {
    return await this.todoServices.findOne(uuid);
  }

  @Get()
  public async getTodo(): Promise<TodoEntity[]> {
    return await this.todoServices.findAll();
  }

  @Put()
  public async putTodo(
    @Body() todo: TodoUpdateRequestDto,
  ): Promise<TodoEntity | null> {
    return await this.todoServices.update(todo);
  }

  @Delete(':todoId')
  public async deleteTodo(@Param('todoId') uuid: string): Promise<void> {
    return await this.todoServices.delete(uuid);
  }
}
