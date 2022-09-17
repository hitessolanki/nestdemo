import { EmployeedepartmentDTO } from './dto/employeedepartment.dto';
import { EmployeedepartmentService } from './employeedepartment.service';
import { Employeedepartment } from './interfaces/employeedepartment.interface';
import { LoggerService } from 'src/logger/logger.service';
export declare class EmployeedepartmentController {
    private readonly employeedepartmentService;
    private logger;
    constructor(employeedepartmentService: EmployeedepartmentService, logger: LoggerService);
    findAll(paginationQuery: any): Promise<Employeedepartment[]>;
    getItem(req: any): Promise<any>;
    findById(param: any): Promise<Employeedepartment>;
    create(itemDTO: EmployeedepartmentDTO): Promise<Employeedepartment>;
    update(param: any, itemDTO: EmployeedepartmentDTO): Promise<Employeedepartment>;
    delete(param: any, itemDTO: any): Promise<Employeedepartment>;
}
