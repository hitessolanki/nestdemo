import { Department } from './schemas/department.schema';
import { Model } from 'mongoose';
import { DepartmentDTO } from './dto/department.dto';
export declare class DepartmentService {
    private readonly itemModel;
    constructor(itemModel: Model<Department>);
    findAll(params: object): Promise<Department[]>;
    findById(id: string): Promise<Department>;
    create(item: DepartmentDTO): Promise<Department>;
    delete(id: string, item: DepartmentDTO): Promise<Department>;
    update(id: string, item: DepartmentDTO): Promise<Department>;
}
