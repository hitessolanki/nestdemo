import { EmployeeDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './interfaces/employee.interface';
import { LoggerService } from 'src/logger/logger.service';
export declare class EmployeeController {
    private readonly employeeService;
    private logger;
    constructor(employeeService: EmployeeService, logger: LoggerService);
    findAll(paginationQuery: any): Promise<Employee[]>;
    getEmployee(params: any): Promise<any>;
    findById(param: any): Promise<Employee>;
    create(itemDTO: EmployeeDTO): Promise<Employee>;
    update(param: any, itemDTO: EmployeeDTO): Promise<Employee>;
    delete(param: any, itemDTO: any): Promise<Employee>;
}
