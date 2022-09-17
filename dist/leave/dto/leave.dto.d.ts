import { Employee } from '../../employee/schemas/employee.schema';
export declare class LeaveDTO {
    employeeid: Employee;
    startdate: Date;
    enddate: Date;
    type: string;
    numberofday: number;
}
