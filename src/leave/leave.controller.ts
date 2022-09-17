import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { LeaveDTO } from './dto/leave.dto';
import { LeaveService } from './leave.service';
import { Leave } from './interfaces/leave.interface';
import { LoggerService } from 'src/logger/logger.service';

@Controller('leave')
export class LeaveController {
  constructor(
    private readonly LeaveService: LeaveService,
    private logger: LoggerService,
  ) { }

  @Get()
  async findAll(@Query() paginationQuery): Promise<Leave[]> {
    this.logger.debug('Get All Items Endpoint');
    let object = { active: true, isdeleted: false };
    return this.LeaveService.findAll(object);
  }

  @Get(':id')
  async findById(@Param() param): Promise<Leave> {
    return this.LeaveService.findById(param.id);
  }

  @Post()
  async create(@Body() itemDTO: LeaveDTO): Promise<Leave> {
    return this.LeaveService.create(itemDTO);
  }

  @Put(':id')
  async update(@Param() param, @Body() itemDTO: LeaveDTO): Promise<Leave> {
    return this.LeaveService.update(param.id, itemDTO);
  }

  @Delete(':id')
  async delete(@Param() param, @Query() itemDTO): Promise<Leave> {
    console.log('itemDTO', itemDTO);
    return this.LeaveService.delete(param.id, itemDTO);
  }
}
