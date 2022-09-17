import { DepartmentDTO } from './dto/employeedepartment.dto';
import { DepartmentService } from './employeedepartment.service';
import { Department } from './interfaces/employeedepartment.interface';
import { LoggerService } from 'src/logger/logger.service';
export declare class EmployeedepartmentController {
    private readonly departmentService;
    private logger;
    constructor(departmentService: DepartmentService, logger: LoggerService);
    findAll(paginationQuery: any): Promise<Department[]>;
    findById(param: any): Promise<Department>;
    create(itemDTO: DepartmentDTO): Promise<Department>;
    update(param: any, itemDTO: DepartmentDTO): Promise<Department>;
    delete(param: any, itemDTO: any): Promise<Department>;
}
