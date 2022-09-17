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
exports.LeaveService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let LeaveService = class LeaveService {
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
        let startdate = new Date(item.startdate);
        let enddate = new Date(item.enddate);
        console.log('startdatt', startdate);
        console.log('enddate', enddate);
        const newItem = new this.itemModel(item);
        return newItem.save();
    }
    async delete(id, item) {
        return this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
    async update(id, item) {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
};
LeaveService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Leave')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LeaveService);
exports.LeaveService = LeaveService;
//# sourceMappingURL=leave.service.js.map