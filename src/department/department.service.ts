import { Injectable } from '@nestjs/common';
import { Department } from './schemas/department.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DepartmentDTO } from './dto/department.dto';

@Injectable()
export class DepartmentService {
  constructor(@InjectModel('Department') private readonly itemModel: Model<Department>) {}

  async findAll(params:object): Promise<Department[]> {
    return this.itemModel.find(params).exec();
  }

  async findById(id: string): Promise<Department> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.itemModel.findOne({ _id: id })
      : null;
  }

  async create(item: DepartmentDTO) {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async delete(id: string, item: DepartmentDTO): Promise<Department> {
    console.log('item', item);
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async update(id: string, item: DepartmentDTO): Promise<Department> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  
}
