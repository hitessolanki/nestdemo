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
exports.EmployeeSchema = exports.Employee = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Employee = class Employee extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ type: String, required: true }),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: true }),
    __metadata("design:type", String)
], Employee.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({ type: Number, required: true }),
    __metadata("design:type", Number)
], Employee.prototype, "salary", void 0);
__decorate([
    mongoose_1.Prop({ type: Date, required: true }),
    __metadata("design:type", Date)
], Employee.prototype, "dob", void 0);
__decorate([
    mongoose_1.Prop({ type: Number, required: true }),
    __metadata("design:type", Number)
], Employee.prototype, "age", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", String)
], Employee.prototype, "profilePicture", void 0);
__decorate([
    mongoose_1.Prop({ type: String, required: false }),
    __metadata("design:type", String)
], Employee.prototype, "position", void 0);
__decorate([
    mongoose_1.Prop({ type: Date, required: false, default: new Date() }),
    __metadata("design:type", Date)
], Employee.prototype, "joiningdate", void 0);
__decorate([
    mongoose_1.Prop({ type: Boolean, required: false, default: true }),
    __metadata("design:type", Boolean)
], Employee.prototype, "active", void 0);
__decorate([
    mongoose_1.Prop({ type: Boolean, required: false, default: false }),
    __metadata("design:type", Boolean)
], Employee.prototype, "isdeleted", void 0);
Employee = __decorate([
    mongoose_1.Schema()
], Employee);
exports.Employee = Employee;
exports.EmployeeSchema = mongoose_1.SchemaFactory.createForClass(Employee);
//# sourceMappingURL=employee.schema.js.map