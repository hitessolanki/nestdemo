import { Injectable } from '@nestjs/common';
import { Employeedepartment } from './schemas/employeedepartment.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeedepartmentDTO } from './dto/employeedepartment.dto';
import * as mongoose from 'mongoose';

@Injectable()
export class EmployeedepartmentService {
  constructor(@InjectModel('Employeedepartment') private readonly itemModel: Model<Employeedepartment>) { }

  async findAll(params: object): Promise<Employeedepartment[]> {
    return this.itemModel.find(params).exec();
  }

  async findById(id: string): Promise<Employeedepartment> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.itemModel.findOne({ _id: id })
      : null;
  }

  async create(item: EmployeedepartmentDTO) {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async delete(id: string, item: EmployeedepartmentDTO): Promise<Employeedepartment> {
    console.log('item', item);
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async update(id: string, item: EmployeedepartmentDTO): Promise<Employeedepartment> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async getdata(req: any): Promise<any> {
    var options = {
      "$lookup" : {
        from : 'employees',
        localField : 'employeeid',
        foreignField : '_id',
        as : 'employee',
      }
    };
    
    if (req.s) {
     options['$lookup']['let']= { "name": `${req.s}`};
     options['$lookup']['pipeline']= [
        { "$match": { "$expr": { "$eq": ["$name", "$$name"] }}}
       ];
  }
    const page:number= parseInt(req.page as any) | 1;
    const limit= 9;
    const skip= ((page-1) * limit);
    console.log('limit', limit);
    console.log('skip', skip);
    
     const result= await this.itemModel.aggregate([
         options,
        {
        $lookup : {
          from : 'departments',
          localField : 'departmentid',
          foreignField : '_id',
          as : 'department',
        },
      },  
      {$sort: {"employees.name": -1}},
      {$limit: limit},
      {$skip: skip}
      ]);
      const total:any=await this.itemModel.count();
      mongoose.set('debug', true);

      return { result, total, page, last_page: Math.ceil(total/limit)};
    //   query.sort(arg:{salary:req.sort});
    // }
  }
}
