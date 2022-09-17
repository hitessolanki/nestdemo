import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { EmployeedepartmentController } from './employeedepartment.controller';
import { EmployeedepartmentService } from './employeedepartment.service';
import { DepartmentSchema } from './schemas/employeedepartment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employeedepartment', schema: DepartmentSchema }]),
    LoggerModule,
  ],
  controllers: [EmployeedepartmentController],
  providers: [EmployeedepartmentService, LoggerService],
})
export class EmployeedepartmentModule {}
