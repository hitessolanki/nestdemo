import { Employee } from '../../employee/schemas/employee.schema';
import { Department } from '../../department/schemas/department.schema';
export interface Employeedepartment {
  departmentid:Department;
  employeeid:Employee;
}
