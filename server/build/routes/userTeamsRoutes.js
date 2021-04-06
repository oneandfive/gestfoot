"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userTeamsController_1 = require("../controllers/userTeamsController");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/find-user-teams/:userID', userTeamsController_1.userTeamsController.findMyTeams);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
