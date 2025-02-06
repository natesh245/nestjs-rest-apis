import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface Todo {
  uuid: string;
  name: string;
  description: string;
}

interface TodoService {
  getTodos({}): { todos: Todo[] };
}

@Injectable()
export class TodoGrpcService {
  private todoService: TodoService;

  constructor(@Inject('todoproto') private client: ClientGrpc) {}

  onModuleInit() {
    this.todoService = this.client.getService<TodoService>('TodoService');
  }

  getTodos(): { todos: Todo[] } {
    return this.todoService.getTodos({});
  }
}
