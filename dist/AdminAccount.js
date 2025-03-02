"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccount = void 0;
const UserAccount_1 = require("./UserAccount");
class AdminAccount extends UserAccount_1.UserAccount {
    constructor(username, password, email) {
        super(username, password, email);
    }
    resetPassword(user, newPassword) {
        user.password = newPassword;
    }
}
exports.AdminAccount = AdminAccount;
