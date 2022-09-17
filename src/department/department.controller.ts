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
import { DepartmentDTO } from './dto/department.dto';
import { DepartmentService } from './department.service';
import { Department } from './interfaces/department.interface';
import { LoggerService } from 'src/logger/logger.service';

@Controller('department')
export class DepartmentController {
  constructor(
    private readonly departmentService: DepartmentService,
    private logger: LoggerService,
  ) { }

  @Get('/')
  async findAll(@Query() paginationQuery): Promise<Department[]> {
    this.logger.debug('Get All Items Endpoint');
    let object = { active: true, isdeleted: false };
    return this.departmentService.findAll(object);
  }
  
  @Get(':id')
  async findById(@Param() param): Promise<Department> {
    return this.departmentService.findById(param.id);
  }

  @Post()
  async create(@Body() itemDTO: DepartmentDTO): Promise<Department> {

    return this.departmentService.create(itemDTO);
  }

  @Put(':id')
  async update(@Param() param, @Body() itemDTO: DepartmentDTO): Promise<Department> {
    return this.departmentService.update(param.id, itemDTO);
  }

  @Delete(':id')
  async delete(@Param() param, @Query() itemDTO): Promise<Department> {
    console.log('itemDTO', itemDTO);
    return this.departmentService.delete(param.id, itemDTO);
  }
}
