import { Employeedepartment } from './schemas/employeedepartment.schema';
import { Model } from 'mongoose';
import { EmployeedepartmentDTO } from './dto/employeedepartment.dto';
export declare class EmployeedepartmentService {
    private readonly itemModel;
    constructor(itemModel: Model<Employeedepartment>);
    findAll(params: object): Promise<Employeedepartment[]>;
    findById(id: string): Promise<Employeedepartment>;
    create(item: EmployeedepartmentDTO): Promise<Employeedepartment>;
    delete(id: string, item: EmployeedepartmentDTO): Promise<Employeedepartment>;
    update(id: string, item: EmployeedepartmentDTO): Promise<Employeedepartment>;
    getdata(req: any): Promise<any>;
}
