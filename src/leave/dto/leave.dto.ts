import {IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Employee } from '../../employee/schemas/employee.schema';
export class LeaveDTO {
   employeeid: Employee;
   @Type(() => Date)
   startdate:Date;
   @Type(() => Date)
   enddate:Date;
   @IsString()
   type:string;
   @IsNumber()
   numberofday:number;
   
  //  @IsDecimal()
  //  maxsalary:Decimal128;
  // @IsBoolean()
  // active:boolean;
  // @IsBoolean()
  // isdeleted:boolean;
}
