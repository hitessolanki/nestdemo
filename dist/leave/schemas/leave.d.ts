import { Document, Schema as MongooseSchema } from 'mongoose';
import { Employee } from 'src/employee/schemas/employee.schema';
import * as mongoose from 'mongoose';
export declare class Leave extends Document {
    employeeid: Employee;
    startdate: Date;
    enddate: Date;
    numberofday: number;
    type: string;
    joiningdate: Date;
    active: boolean;
    isdeleted: boolean;
}
export declare const LeaveSchema: MongooseSchema<Leave, mongoose.Model<Leave, any, any>, undefined, {}>;
