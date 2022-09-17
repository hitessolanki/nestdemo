import {IsString, IsNumber } from 'class-validator'
import { Type } from 'class-transformer';
export class DepartmentDTO {
  @IsString()
   departmentname: string;
  @IsNumber()
   noofemployee:number;
  //  @IsDecimal()
  //  maxsalary:Decimal128;
  // @IsBoolean()
  // active:boolean;
  // @IsBoolean()
  // isdeleted:boolean;
}
