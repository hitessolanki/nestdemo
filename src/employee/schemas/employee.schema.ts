import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employee extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique : true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Number, required: true })
  salary: number;

  @Prop({ type: Date, required: true })
  dob: Date;

  @Prop({ type: Number, required: true })
  age: number;
  
  @Prop({ type: String, required: false })
  profilePicture: string;

  @Prop({ type: String, required: false })
  position: string;

  @Prop({ type: Date, required: false, default:new Date() })
  joiningdate: Date;

  @Prop({ type: Boolean, required: false, default:true })
  active: boolean;

  @Prop({ type: Boolean, required: false, default:false })
  isdeleted: boolean ;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
