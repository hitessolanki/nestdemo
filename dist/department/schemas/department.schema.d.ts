import { Document, Schema as MongooseSchema } from 'mongoose';
export declare class Department extends Document {
    departmentname: string;
    noofemployee: number;
    maxsalary: number;
    joiningdate: Date;
    active: boolean;
    isdeleted: boolean;
}
export declare const DepartmentSchema: MongooseSchema<Department, import("mongoose").Model<Department, any, any>, undefined, {}>;
