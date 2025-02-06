import { Test, TestingModule } from '@nestjs/testing';
import { TodoGrpcController } from './todo-grpc.controller';

describe('TodoGrpcController', () => {
  let controller: TodoGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoGrpcController],
    }).compile();

    controller = module.get<TodoGrpcController>(TodoGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
