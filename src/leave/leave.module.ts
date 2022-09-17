import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { LeaveController } from './leave.controller';
import { LeaveService } from './leave.service';
import { LeaveSchema } from './schemas/leave';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Leave', schema: LeaveSchema }]),
    LoggerModule,
  ],
  controllers: [LeaveController],
  providers: [LeaveService, LoggerService],
})
export class LeaveModule {}
