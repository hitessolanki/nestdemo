import { Injectable, Options } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeDTO } from './dto/employee.dto';
import * as mongoose from 'mongoose';
import * as moment from 'moment';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private readonly itemModel: Model<Employee>) { }

  async findAll(params: object): Promise<Employee[]> {
    return this.itemModel.find(params).exec();
  }

  async findById(id: string): Promise<Employee> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.itemModel.findOne({ _id: id })
      : null;
  }

  async create(item: EmployeeDTO) {
    var today = new Date();
    var birthDate = new Date(item.dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    item.age = age;
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async delete(id: string, item: EmployeeDTO): Promise<Employee> {
    // console.log('item', item);
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async update(id: string, item: EmployeeDTO): Promise<Employee> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async getEmployee(params: any, condition: any) {
    if (params.salary) {
      condition['salary'] = { $gte: Number(params.salary) };
    }
    if (params.joiningdate) {
      condition['joiningdate'] = new Date(params.joiningdate);
    }
    const result = await this.itemModel.find(condition);
    mongoose.set('debug', true);
    return result;
  }
}
