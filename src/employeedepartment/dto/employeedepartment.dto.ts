import {IsNotEmpty, IsString } from 'class-validator'
import { Employee } from '../../employee/schemas/employee.schema';
import { Department } from '../../department/schemas/department.schema';
export class EmployeedepartmentDTO {
  
   departmentid: Department;
   employeeid:Employee;
  //  @IsDecimal()
  //  maxsalary:Decimal128;
  // @IsBoolean()
  // active:boolean;
  // @IsBoolean()
  // isdeleted:boolean;
}
