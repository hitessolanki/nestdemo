import { Employee } from './schemas/department.schema';
import { Model } from 'mongoose';
import { EmployeeDTO } from './dto/department.dto';
export declare class EmployeeService {
    private readonly itemModel;
    constructor(itemModel: Model<Employee>);
    findAll(params: object): Promise<Employee[]>;
    findById(id: string): Promise<Employee>;
    create(item: EmployeeDTO): Promise<any>;
    delete(id: string, item: EmployeeDTO): Promise<Employee>;
    update(id: string, item: EmployeeDTO): Promise<Employee>;
}
