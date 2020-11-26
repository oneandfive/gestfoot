import { Router } from 'express';
import { usersController } from '../controllers/usersController';

class UsersRoutes {

    public rounter: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.rounter.get('/', usersController.list);
        this.rounter.get('/:id', usersController.getOne);
        this.rounter.post('/', usersController.create);
        this.rounter.put('/:id', usersController.update);
        this.rounter.delete('/:id', usersController.delete);
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.rounter;
