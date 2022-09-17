import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Query,
} from '@nestjs/common';
import { EmployeedepartmentDTO } from './dto/employeedepartment.dto';
import { EmployeedepartmentService } from './employeedepartment.service';
import { Employeedepartment } from './interfaces/employeedepartment.interface';
import { LoggerService } from 'src/logger/logger.service';

@Controller('employeedepartment')
export class EmployeedepartmentController {
  constructor(
    private readonly employeedepartmentService: EmployeedepartmentService,
    private logger: LoggerService,
  ) { }

  @Get('/')
  async findAll(@Query() paginationQuery): Promise<Employeedepartment[]> {
    this.logger.debug('Get All Items Endpoint');
    let object = { active: true, isdeleted: false };
    return this.employeedepartmentService.findAll(object);
  }
  @Get('/item-inventory')
  async getItem(@Query() req) {
    return await this.employeedepartmentService.getdata(req);
  }

  @Get(':id')
  async findById(@Param() param): Promise<Employeedepartment> {
    return this.employeedepartmentService.findById(param.id);
  }

  @Post()
  async create(@Body() itemDTO: EmployeedepartmentDTO): Promise<Employeedepartment> {
    return this.employeedepartmentService.create(itemDTO);
  }

  @Put(':id')
  async update(@Param() param, @Body() itemDTO: EmployeedepartmentDTO): Promise<Employeedepartment> {
    return this.employeedepartmentService.update(param.id, itemDTO);
  }

  @Delete(':id')
  async delete(@Param() param, @Query() itemDTO): Promise<Employeedepartment> {
    console.log('itemDTO', itemDTO);
    return this.employeedepartmentService.delete(param.id, itemDTO);
  }
  
}
