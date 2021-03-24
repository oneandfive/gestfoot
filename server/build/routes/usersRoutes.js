"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.rounter.get('/', usersController.list);
        // this.rounter.get('/:id', usersController.getOne);
        // this.rounter.put('/:id', usersController.update);
        // this.rounter.delete('/:id', usersController.delete);
        this.router.post('/register', usersController_1.usersController.create);
        this.router.get('/find-user-pass/:email/:password', usersController_1.usersController.findUserPass);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
