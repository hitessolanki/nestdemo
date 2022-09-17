import {IsString, IsEmail, IsNumber, IsInt, IsDate } from 'class-validator'
import { Type } from 'class-transformer';
export class EmployeeDTO {
  @IsString()
  readonly name: string;
  @Type(() => Date)
  readonly dob: Date;
  @IsEmail()
  readonly email: string;
  @IsString()
   password: string;
  @IsString()
   profilePicture: string;
  @IsNumber()
  salary: number;
  @Type(() => Date)
  @IsDate()
   joiningdate: Date;
  @IsInt()
   age?: number;
  @IsString()
   position: string;
  // @IsBoolean()
  // active:boolean;
  // @IsBoolean()
  // isdeleted:boolean;
}
