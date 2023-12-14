"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDto = void 0;
function toDto(user) {
    return {
        id: user.id,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
        deletedAt: user.deletedAt,
        updatedAt: user.updatedAt,
    };
}
exports.toDto = toDto;
//# sourceMappingURL=users_mapper.js.map