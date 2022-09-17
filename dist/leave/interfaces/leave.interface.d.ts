import { Employee } from 'src/employee/schemas/employee.schema';
export interface Leave {
    employeeid: Employee;
    startdate: Date;
    enddate: Date;
    type: string;
    numberofday: number;
}
