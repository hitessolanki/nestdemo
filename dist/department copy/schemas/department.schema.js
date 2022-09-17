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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentSchema = exports.Department = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Department = class Department extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ type: String, required: true }),
    __metadata("design:type", String)
], Department.prototype, "departmentname", void 0);
__decorate([
    mongoose_1.Prop({ type: Number, required: false, default: 0 }),
    __metadata("design:type", Number)
], Department.prototype, "noofemployee", void 0);
__decorate([
    mongoose_1.Prop({ type: Number, required: false, default: 0 }),
    __metadata("design:type", Number)
], Department.prototype, "maxsalary", void 0);
__decorate([
    mongoose_1.Prop({ type: Boolean, required: false, default: true }),
    __metadata("design:type", Boolean)
], Department.prototype, "active", void 0);
__decorate([
    mongoose_1.Prop({ type: Boolean, required: false, default: false }),
    __metadata("design:type", Boolean)
], Department.prototype, "isdeleted", void 0);
Department = __decorate([
    mongoose_1.Schema()
], Department);
exports.Department = Department;
exports.DepartmentSchema = mongoose_1.SchemaFactory.createForClass(Department);
//# sourceMappingURL=department.schema.js.map