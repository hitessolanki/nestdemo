import { Injectable } from '@nestjs/common';
import { Leave } from './schemas/leave';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LeaveDTO } from './dto/leave.dto';

@Injectable()
export class LeaveService {
  constructor(@InjectModel('Leave') private readonly itemModel: Model<Leave>) {}

  async findAll(params:object): Promise<Leave[]> {
    return this.itemModel.find(params).exec();
  }

  async findById(id: string): Promise<Leave> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.itemModel.findOne({ _id: id })
      : null;
  }

  async create(item: LeaveDTO) {
    let startdate = new Date(item.startdate);
    let enddate = new Date(item.enddate);
    console.log('startdatt',startdate);
    console.log('enddate', enddate);
    // let diffInMs   =  enddate - startdate;
    // const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async delete(id: string, item: LeaveDTO): Promise<Leave> {
    // console.log('item', item);
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async update(id: string, item: LeaveDTO): Promise<Leave> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
