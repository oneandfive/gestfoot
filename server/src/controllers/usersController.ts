import { Request, Response } from 'express';

import pool from '../database';
import { UserDTO } from '../model/userDTO';

class UsersController {

    public async list(req: Request, res: Response): Promise<void> {
        const users = await pool.query('SELECT * FROM gest_user');
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const user = await pool.query('SELECT * from gest_user WHERE user_id = ?', id);
        if (user.length > 0) {
            return res.json(user[0]);
        }
        
        res.status(404).json({text: 'User not found'});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO gest_user set ?', [req.body]);
        res.json({text: 'user create'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM gest_user WHERE user_id = ?', id);

        res.json({text: 'user deleted'});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE gest_user SET ? WHERE user_id = ?', [req.body, id]);

        res.json({text: 'Update users ' + req.params.id});
    }

    public async findUserPass(req: Request, res: Response): Promise<void> {
        let { email } = req.params;
        const { password } = req.params;
        email = email.toUpperCase();
        console.log("a"+email);
        console.log("b"+password);
        const userDB = await pool.query('SELECT * FROM gest_user WHERE UPPER(user_email) = ?', [email]);

        if (userDB.length > 1) {
            res.status(404).json({text: "Error, no pot haver-hi més d'un usuari"});
        } else if (userDB.length < 1) {
            res.status(404).json({text: "L'usuari no existeix"});
        } else {
            //Check password
            if (userDB[0].USER_PASSWORD == password) {
                res.json(userDB[0]);
            } else {
                res.status(404).json({text: "Contrasenya incorrecta"});
            }

        }
    }

}

export const usersController = new UsersController ();