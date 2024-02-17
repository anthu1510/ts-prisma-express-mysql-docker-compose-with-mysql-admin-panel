import { Request, Response } from "express";
import hashPwd from "password-hash"
import { db } from "../databases";

class UserController {
    async getAll(req: Request, res: Response) {
       try {
        const users = await db.users.findMany({
           include: {
            posts: true,
           },
        });
        res.json(users);
       } catch (error: any) {
        res.json({errors: {message: error.message}})
       }
    }

    async create(req: Request, res: Response) {
        try {
         const user = await db.users.create({
           data: {...req.body, password: hashPwd.generate(req.body.password)}
         });
         res.json(user);
        } catch (error: any) {
         res.json({errors: {message: error.message}})
        }
     }
}

export default new UserController();