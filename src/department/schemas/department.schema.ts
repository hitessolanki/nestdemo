import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,  Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Department extends Document {
  @Prop({ type: String, required: true })
  departmentname: string;
  
  @Prop({ type: Number, required: false, default:0 })
  noofemployee: number;

  @Prop({ type: Number, required: false, default:0 })
  maxsalary: number;

  // @Prop({ type: Date, required: false, default:new Date() })
  joiningdate: Date;

  @Prop({ type: Boolean, required: false, default:true })
  active: boolean;

  @Prop({ type: Boolean, required: false, default:false })
  isdeleted: boolean ;

  // @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Employee' })
  // employee:  MongooseSchema.Types.ObjectId  
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
