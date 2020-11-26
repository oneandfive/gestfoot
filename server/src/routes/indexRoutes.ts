import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public rounter: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.rounter.get('/', indexController.index);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.rounter;
