import { Document, Schema as MongooseSchema } from 'mongoose';
import * as mongoose from 'mongoose';
import { Employee } from '../../employee/schemas/employee.schema';
import { Department } from '../../department/schemas/department.schema';
export declare class Employeedepartment extends Document {
    employeeid: Employee;
    departmentid: Department;
    joiningdate: Date;
    active: boolean;
    isdeleted: boolean;
}
export declare const DepartmentSchema: MongooseSchema<Employeedepartment, mongoose.Model<Employeedepartment, any, any>, undefined, {}>;
