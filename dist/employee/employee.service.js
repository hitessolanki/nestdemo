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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let EmployeeService = class EmployeeService {
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
    async delete(id, item) {
        return this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
    async update(id, item) {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
    async getEmployee(params, condition) {
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
};
EmployeeService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Employee')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map