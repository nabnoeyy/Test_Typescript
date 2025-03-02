"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount1 = void 0;
class BankAccount1 {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getEmail() {
        return this.email;
    }
    changePassword(oldPassword, newPassword) {
    }
}
exports.BankAccount1 = BankAccount1;
