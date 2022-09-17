"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeedepartmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let EmployeedepartmentService = class EmployeedepartmentService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async findAll(params) {
        return this.itemModel.find(params).exec();
    }
    async findById(id) {
        return id.match(/^[0-9a-fA-F]{24}$/)
            ? await this.itemModel.findOne({ _id: id })
            : null;
    }
    async create(item) {
        const newItem = new this.itemModel(item);
        return newItem.save();
    }
    async delete(id, item) {
        console.log('item', item);
        return this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
    async update(id, item) {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
    async getdata(req) {
        var options = {
            "$lookup": {
                from: 'employees',
                localField: 'employeeid',
                foreignField: '_id',
                as: 'employee',
            }
        };
        if (req.s) {
            options['$lookup']['let'] = { "name": `${req.s}` };
            options['$lookup']['pipeline'] = [
                { "$match": { "$expr": { "$eq": ["$name", "$$name"] } } }
            ];
        }
        const page = parseInt(req.page) | 1;
        const limit = 9;
        const skip = ((page - 1) * limit);
        console.log('limit', limit);
        console.log('skip', skip);
        const result = await this.itemModel.aggregate([
            options,
            {
                $lookup: {
                    from: 'departments',
                    localField: 'departmentid',
                    foreignField: '_id',
                    as: 'department',
                },
            },
            { $sort: { "employees.name": -1 } },
            { $limit: limit },
            { $skip: skip }
        ]);
        const total = await this.itemModel.count();
        mongoose.set('debug', true);
        return { result, total, page, last_page: Math.ceil(total / limit) };
    }
};
EmployeedepartmentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Employeedepartment')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EmployeedepartmentService);
exports.EmployeedepartmentService = EmployeedepartmentService;
//# sourceMappingURL=employeedepartment.service.js.map