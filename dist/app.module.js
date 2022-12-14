"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const logger_module_1 = require("./logger/logger.module");
const employee_module_1 = require("./employee/employee.module");
const leave_module_1 = require("./leave/leave.module");
const department_module_1 = require("./department/department.module");
const employeedepartment_module_1 = require("./employeedepartment/employeedepartment.module");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            logger_module_1.LoggerModule,
            employee_module_1.EmployeeModule,
            department_module_1.DepartmentModule,
            employeedepartment_module_1.EmployeedepartmentModule,
            leave_module_1.LeaveModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    uri: `${configService.get('database.uri')}`,
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map