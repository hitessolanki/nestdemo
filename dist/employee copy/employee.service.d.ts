import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { EmployeeDTO } from './dto/employee.dto';
export declare class EmployeeService {
    private readonly itemModel;
    constructor(itemModel: Model<Employee>);
    findAll(params: object): Promise<Employee[]>;
    findById(id: string): Promise<Employee>;
    create(item: EmployeeDTO): Promise<Employee>;
    delete(id: string, item: EmployeeDTO): Promise<Employee>;
    update(id: string, item: EmployeeDTO): Promise<Employee>;
}
