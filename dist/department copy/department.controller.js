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
exports.DepartmentController = void 0;
const common_1 = require("@nestjs/common");
const department_dto_1 = require("./dto/department.dto");
const department_service_1 = require("./department.service");
const logger_service_1 = require("../logger/logger.service");
let DepartmentController = class DepartmentController {
    constructor(departmentService, logger) {
        this.departmentService = departmentService;
        this.logger = logger;
    }
    async findAll(paginationQuery) {
        this.logger.debug('Get All Items Endpoint');
        let object = { active: true, isdeleted: false };
        return this.departmentService.findAll(object);
    }
    async findById(param) {
        return this.departmentService.findById(param.id);
    }
    async create(itemDTO) {
        return this.departmentService.create(itemDTO);
    }
    async update(param, itemDTO) {
        return this.departmentService.update(param.id, itemDTO);
    }
    async delete(param, itemDTO) {
        console.log('itemDTO', itemDTO);
        return this.departmentService.delete(param.id, itemDTO);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [department_dto_1.DepartmentDTO]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, department_dto_1.DepartmentDTO]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "delete", null);
DepartmentController = __decorate([
    common_1.Controller('department'),
    __metadata("design:paramtypes", [department_service_1.DepartmentService,
        logger_service_1.LoggerService])
], DepartmentController);
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controller.js.map