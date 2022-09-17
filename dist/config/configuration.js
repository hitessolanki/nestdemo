"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        uri: "mongodb://localhost:27017/manage_employee"
    },
});
//# sourceMappingURL=configuration.js.map