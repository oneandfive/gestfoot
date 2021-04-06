import { Router } from 'express';
import { userTeamsController } from '../controllers/userTeamsController';

class UsersRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/find-user-teams/:userID', userTeamsController.findMyTeams);
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;
