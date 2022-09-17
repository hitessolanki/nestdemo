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
exports.DepartmentSchema = exports.Employeedepartment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const employee_schema_1 = require("../../employee/schemas/employee.schema");
const department_schema_1 = require("../../department/schemas/department.schema");
let Employeedepartment = class Employeedepartment extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }),
    __metadata("design:type", employee_schema_1.Employee)
], Employeedepartment.prototype, "employeeid", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' }),
    __metadata("design:type", department_schema_1.Department)
], Employeedepartment.prototype, "departmentid", void 0);
__decorate([
    mongoose_1.Prop({ type: Date, required: false, default: new Date() }),
    __metadata("design:type", Date)
], Employeedepartment.prototype, "joiningdate", void 0);
__decorate([
    mongoose_1.Prop({ type: Boolean, required: false, default: true }),
    __metadata("design:type", Boolean)
], Employeedepartment.prototype, "active", void 0);
__decorate([
    mongoose_1.Prop({ type: Boolean, required: false, default: false }),
    __metadata("design:type", Boolean)
], Employeedepartment.prototype, "isdeleted", void 0);
Employeedepartment = __decorate([
    mongoose_1.Schema()
], Employeedepartment);
exports.Employeedepartment = Employeedepartment;
exports.DepartmentSchema = mongoose_1.SchemaFactory.createForClass(Employeedepartment);
//# sourceMappingURL=employeedepartment.schema.js.map