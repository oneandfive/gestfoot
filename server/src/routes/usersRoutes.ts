import { Router } from 'express';
import { usersController } from '../controllers/usersController';

class UsersRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // this.rounter.get('/', usersController.list);
        // this.rounter.get('/:id', usersController.getOne);
        // this.rounter.put('/:id', usersController.update);
        // this.rounter.delete('/:id', usersController.delete);
        this.router.post('/register', usersController.create);
        this.router.get('/find-user-pass/:email/:password', usersController.findUserPass);
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;
