import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { DepartmentSchema } from './schemas/department.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema }]),
    LoggerModule,
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService, LoggerService],
})
export class DepartmentModule {}
