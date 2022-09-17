import { LeaveDTO } from './dto/leave.dto';
import { LeaveService } from './leave.service';
import { Leave } from './interfaces/leave.interface';
import { LoggerService } from 'src/logger/logger.service';
export declare class LeaveController {
    private readonly LeaveService;
    private logger;
    constructor(LeaveService: LeaveService, logger: LoggerService);
    findAll(paginationQuery: any): Promise<Leave[]>;
    findById(param: any): Promise<Leave>;
    create(itemDTO: LeaveDTO): Promise<Leave>;
    update(param: any, itemDTO: LeaveDTO): Promise<Leave>;
    delete(param: any, itemDTO: any): Promise<Leave>;
}
