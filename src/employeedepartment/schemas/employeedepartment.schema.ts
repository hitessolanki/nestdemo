import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,  Schema as MongooseSchema } from 'mongoose';
import * as mongoose from 'mongoose';
import { Employee } from '../../employee/schemas/employee.schema';
import { Department } from '../../department/schemas/department.schema';
@Schema()
export class Employeedepartment extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  employeeid: Employee;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
  departmentid: Department;
  
  @Prop({ type: Date, required: false, default:new Date() })
  joiningdate: Date;

  @Prop({ type: Boolean, required: false, default:true })
  active: boolean;

  @Prop({ type: Boolean, required: false, default:false })
  isdeleted: boolean;

}

export const DepartmentSchema = SchemaFactory.createForClass(Employeedepartment);
