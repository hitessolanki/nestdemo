"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const logger_module_1 = require("../logger/logger.module");
const logger_service_1 = require("../logger/logger.service");
const leave_controller_1 = require("./leave.controller");
const leave_service_1 = require("./leave.service");
const leave_1 = require("./schemas/leave");
let DepartmentModule = class DepartmentModule {
};
DepartmentModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Leave', schema: leave_1.LeaveSchema }]),
            logger_module_1.LoggerModule,
        ],
        controllers: [leave_controller_1.LeaveController],
        providers: [leave_service_1.LeaveService, logger_service_1.LoggerService],
    })
], DepartmentModule);
exports.DepartmentModule = DepartmentModule;
//# sourceMappingURL=department.module.js.map