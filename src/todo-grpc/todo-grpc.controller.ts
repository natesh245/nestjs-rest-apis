import { Controller, Get } from '@nestjs/common';
import { TodoGrpcService } from './todo-grpc.service';

@Controller('todo-grpc')
export class TodoGrpcController {
  constructor(private readonly todoServices: TodoGrpcService) {}
  @Get()
  public async getTodo(): Promise<{
    todos: { uuid: string; name: string; description: string }[];
  }> {
    return this.todoServices.getTodos();
  }
}
