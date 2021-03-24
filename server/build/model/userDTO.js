"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor() { }
    get id() {
        return this.USER_ID;
    }
    set id(value) {
        this.USER_ID = value;
    }
    get firstName() {
        return this.USER_FIRST_NAME;
    }
    set firstName(value) {
        this.USER_FIRST_NAME = value;
    }
    get lastName() {
        return this.USER_LAST_NAME;
    }
    set lastName(value) {
        this.USER_LAST_NAME = value;
    }
    get email() {
        return this.USER_EMAIL;
    }
    set email(value) {
        this.USER_EMAIL = value;
    }
    get password() {
        return this.USER_PASSWORD;
    }
    set password(value) {
        this.USER_PASSWORD = value;
    }
    get phone() {
        return this.USER_PHONE;
    }
    set phone(value) {
        this.USER_PHONE = value;
    }
    get dateCreate() {
        return this.USER_DATE_CREATE;
    }
    set dateCreate(value) {
        this.USER_DATE_CREATE = value;
    }
    get usuCreate() {
        return this.USER_USU_CREATE;
    }
    set usuCreate(value) {
        this.USER_USU_CREATE = value;
    }
    get usuMod() {
        return this.USER_USU_MOD;
    }
    set usuMod(value) {
        this.USER_USU_MOD = value;
    }
    get dataMod() {
        return this.USER_DATE_MOD;
    }
    set dateMod(value) {
        this.USER_DATE_MOD = value;
    }
}
exports.UserDTO = UserDTO;
