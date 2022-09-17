import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeSchema } from './schemas/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
    LoggerModule,
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, LoggerService],
})
export class EmployeeModule {}
