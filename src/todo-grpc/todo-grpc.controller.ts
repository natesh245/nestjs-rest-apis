import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { TodoGrpcService } from './todo-grpc.service';
import {
  CreateTodoDto,
  deleteSuccessMessage,
  getTodosResponse,
  Todo,
} from './interfaces/proto/todo';

@Controller('grpc/todos')
export class TodoGrpcController {
  constructor(private readonly todoServices: TodoGrpcService) {}
  @Get()
  public async getTodos(): Promise<getTodosResponse> {
    return this.todoServices.getTodos();
  }

  @Get(':todoId')
  public async getTodoById(@Param('todoId') uuid: string): Promise<Todo> {
    return this.todoServices.getTodoById(uuid);
  }

  @Post()
  public async createTodo(@Body() todo: CreateTodoDto): Promise<Todo> {
    return this.todoServices.createTodo(todo);
  }

  @Put()
  public async updateTodo(@Body() todo: Todo): Promise<Todo> {
    return this.todoServices.updateTodo(todo);
  }

  @Delete(':todoId')
  public async deleteTodo(
    @Param('todoId') uuid: string,
  ): Promise<deleteSuccessMessage> {
    return this.todoServices.deleteTodo(uuid);
  }
}
