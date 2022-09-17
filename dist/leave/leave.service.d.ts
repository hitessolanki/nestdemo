import { Leave } from './schemas/leave';
import { Model } from 'mongoose';
import { LeaveDTO } from './dto/leave.dto';
export declare class LeaveService {
    private readonly itemModel;
    constructor(itemModel: Model<Leave>);
    findAll(params: object): Promise<Leave[]>;
    findById(id: string): Promise<Leave>;
    create(item: LeaveDTO): Promise<Leave>;
    delete(id: string, item: LeaveDTO): Promise<Leave>;
    update(id: string, item: LeaveDTO): Promise<Leave>;
}
