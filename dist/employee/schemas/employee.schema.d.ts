import { Document } from 'mongoose';
export declare class Employee extends Document {
    name: string;
    email: string;
    password: string;
    salary: number;
    dob: Date;
    age: number;
    profilePicture: string;
    position: string;
    joiningdate: Date;
    active: boolean;
    isdeleted: boolean;
}
export declare const EmployeeSchema: import("mongoose").Schema<Employee, import("mongoose").Model<Employee, any, any>, undefined, {}>;
