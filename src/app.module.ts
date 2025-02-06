import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { TodoGrpcModule } from './todo-grpc/todo-grpc.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user-name',
      password: 'strong-password',
      database: 'test_db',
      entities: ['**/entity/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TodoModule,
    TodoGrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
