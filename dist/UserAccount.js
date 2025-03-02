"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
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
        if (this.password === oldPassword) {
            this.password === newPassword;
            return true;
        }
        return false;
    }
}
exports.UserAccount = UserAccount;
