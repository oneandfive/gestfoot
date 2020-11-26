"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class UsersRoutes {
    constructor() {
        this.rounter = express_1.Router();
        this.config();
    }
    config() {
        this.rounter.get('/', usersController_1.usersController.list);
        this.rounter.get('/:id', usersController_1.usersController.getOne);
        this.rounter.post('/', usersController_1.usersController.create);
        this.rounter.put('/:id', usersController_1.usersController.update);
        this.rounter.delete('/:id', usersController_1.usersController.delete);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.rounter;
