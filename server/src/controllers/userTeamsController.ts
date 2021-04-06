import { Request, Response } from 'express';

import pool from '../database';
import { UserDTO } from '../model/userDTO';

class UserTeamsController {

    public async findMyTeams(req: Request, res: Response): Promise<void> {
        let { userID } = req.params;
        console.log("userID "+userID);
        const userTeamsDB = await pool.query('SELECT * FROM GEST_USER_TEAM left join gest_team on GEST_USER_TEAM.team_id = gest_team.TEAM_ID WHERE user_id = ?', [userID]);

        res.json(userTeamsDB);
    }

}

export const userTeamsController = new UserTeamsController ();