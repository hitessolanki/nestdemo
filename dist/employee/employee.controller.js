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
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const employee_dto_1 = require("./dto/employee.dto");
const employee_service_1 = require("./employee.service");
const logger_service_1 = require("../logger/logger.service");
let EmployeeController = class EmployeeController {
    constructor(employeeService, logger) {
        this.employeeService = employeeService;
        this.logger = logger;
    }
    async findAll(paginationQuery) {
        this.logger.debug('Get All Items Endpoint');
        let object = { active: true, isdeleted: false };
        return this.employeeService.findAll(object);
    }
    async getEmployee(params) {
        this.logger.debug('Get All Items Endpoint');
        let object = { active: true, isdeleted: false };
        return this.employeeService.getEmployee(params, object);
    }
    async findById(param) {
        return this.employeeService.findById(param.id);
    }
    async create(itemDTO) {
        return this.employeeService.create(itemDTO);
    }
    async update(param, itemDTO) {
        return this.employeeService.update(param.id, itemDTO);
    }
    async delete(param, itemDTO) {
        console.log('itemDTO', itemDTO);
        return this.employeeService.delete(param.id, itemDTO);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findAll", null);
__decorate([
    common_1.Get('/get-employee'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getEmployee", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_dto_1.EmployeeDTO]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, employee_dto_1.EmployeeDTO]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "delete", null);
EmployeeController = __decorate([
    common_1.Controller('employee'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        logger_service_1.LoggerService])
], EmployeeController);
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.controller.js.map