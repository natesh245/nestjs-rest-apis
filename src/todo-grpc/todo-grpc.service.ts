import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import {
  TodoService,
  Todo,
  getTodosResponse,
  CreateTodoDto,
  deleteSuccessMessage,
} from './interfaces/proto/todo';

@Injectable()
export class TodoGrpcService {
  private todoGrpcClientStub: TodoService;

  constructor(@Inject('todoproto') private client: ClientGrpc) {}

  onModuleInit() {
    this.todoGrpcClientStub =
      this.client.getService<TodoService>('TodoService');
  }

  getTodos(): getTodosResponse {
    return this.todoGrpcClientStub.getTodos({});
  }

  getTodoById(uuid: string): Todo {
    return this.todoGrpcClientStub.getTodoById({ uuid });
  }

  createTodo(todo: CreateTodoDto): Todo {
    return this.todoGrpcClientStub.createTodo(todo);
  }

  updateTodo(updatedTodo: Todo): Todo {
    return this.todoGrpcClientStub.updateTodo(updatedTodo);
  }

  deleteTodo(uuid: string): deleteSuccessMessage {
    return this.todoGrpcClientStub.deleteTodo({ uuid });
  }
}
