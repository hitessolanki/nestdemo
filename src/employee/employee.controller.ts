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
import { EmployeeDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/employee.interface';
import { LoggerService } from 'src/logger/logger.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private logger: LoggerService,
  ) { }

  @Get()
  async findAll(@Query() paginationQuery): Promise<Employee[]> {
    this.logger.debug('Get All Items Endpoint');
    let object={active: true, isdeleted:false};
    return this.employeeService.findAll(object);
  }

  @Get('/get-employee')
  async getEmployee(@Query() params): Promise<any> {
    this.logger.debug('Get All Items Endpoint');
    let object={active: true, isdeleted:false};
    return this.employeeService.getEmployee(params, object);
  }

  @Get(':id')
  async findById(@Param() param): Promise<Employee> {
    return this.employeeService.findById(param.id);
  }

  @Post()
  async create(@Body() itemDTO: EmployeeDTO): Promise<Employee> {
    return this.employeeService.create(itemDTO);
  }

  @Put(':id')
  async update(@Param() param, @Body() itemDTO: EmployeeDTO): Promise<Employee> {
    return this.employeeService.update(param.id, itemDTO);
  }

  @Delete(':id')
  async delete(@Param() param, @Query() itemDTO): Promise<Employee> {
    console.log('itemDTO', itemDTO);
    
    return this.employeeService.delete(param.id, itemDTO);
  }
}
