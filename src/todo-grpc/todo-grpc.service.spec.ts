import { Test, TestingModule } from '@nestjs/testing';
import { TodoGrpcService } from './todo-grpc.service';

describe('TodoGrpcService', () => {
  let service: TodoGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoGrpcService],
    }).compile();

    service = module.get<TodoGrpcService>(TodoGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
