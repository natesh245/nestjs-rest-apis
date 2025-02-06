import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TodoGrpcController } from './todo-grpc.controller';
import { TodoGrpcService } from './todo-grpc.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'todoproto',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: 'todoproto',
          protoPath: join(__dirname, '../todo.proto'),
        },
      },
    ]),
  ],
  controllers: [TodoGrpcController],
  providers: [TodoGrpcService],
})
export class TodoGrpcModule {}
