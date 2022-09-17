import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,  Schema as MongooseSchema } from 'mongoose';
import { Employee } from 'src/employee/schemas/employee.schema';
import * as mongoose from 'mongoose';
@Schema()
export class Leave extends Document {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Employee' })
  employeeid: Employee;

  @Prop({ type: Date, required:true })
  startdate: Date;

  @Prop({ type: Date, required:true })
  enddate: Date;

  @Prop({ type: Number, required:true })
  numberofday: number;

  @Prop({ type: String, required:true })
  type: string;
  
  @Prop({ type: Date, required: false, default:new Date() })
  joiningdate: Date;

  @Prop({ type: Boolean, required: false, default:true })
  active: boolean;

  @Prop({ type: Boolean, required: false, default:false })
  isdeleted: boolean ;

  // @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Employee' })
  // employee:  MongooseSchema.Types.ObjectId  
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);
