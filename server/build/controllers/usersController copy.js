"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const database_1 = __importDefault(require("../database"));
class UsersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM gest_user');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('SELECT * from gest_user WHERE user_id = ?', id);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: 'User not found' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO gest_user set ?', [req.body]);
            res.json({ text: 'user create' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM gest_user WHERE user_id = ?', id);
            res.json({ text: 'user deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE gest_user SET ? WHERE user_id = ?', [req.body, id]);
            res.json({ text: 'Update users ' + req.params.id });
        });
    }
    findUserPass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { email } = req.params;
            const { password } = req.params;
            email = email.toUpperCase();
            console.log("a" + email);
            console.log("b" + password);
            const userDB = yield database_1.default.query('SELECT * FROM gest_user WHERE UPPER(user_email) = ?', [email]);
            if (userDB.length > 1) {
                res.status(404).json({ text: "Error, no pot haver-hi més d'un usuari" });
            }
            else if (userDB.length < 1) {
                res.status(404).json({ text: "L'usuari no existeix" });
            }
            else {
                //Check password
                if (userDB[0].USER_PASSWORD == password) {
                    res.json(userDB[0]);
                }
                else {
                    res.status(404).json({ text: "Contrasenya incorrecta" });
                }
            }
        });
    }
}
exports.usersController = new UsersController();
