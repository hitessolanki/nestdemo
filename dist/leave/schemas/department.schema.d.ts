import { Document, Schema as MongooseSchema } from 'mongoose';
export declare class Leave extends Document {
    departmentname: string;
    noofemployee: number;
    maxsalary: number;
    joiningdate: Date;
    active: boolean;
    isdeleted: boolean;
}
export declare const DepartmentSchema: MongooseSchema<Leave, import("mongoose").Model<Leave, any, any>, undefined, {}>;
