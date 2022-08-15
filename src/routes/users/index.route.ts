
import { Router, Response, Request, NextFunction } from "express";
import { Connection, Query } from "../../config/mysql/index.mysql";
import queryRoute from "./query.route";
// @ts-ignore
import {UserModel, IUserLoginDirective} from "@types/user.data";
import { sign } from 'jsonwebtoken';

class UserRoute {
    public async getAllUsers(req: Request, res: Response): Promise<Response | any> {
        Connection()
            .then((conn) => {
                Query(conn, queryRoute.getAllUsers)
                    .then((data) => {
                        return res.status(200).json({ data })
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            message: `Error: (Inexpected) ${err.message}`,
                            error: err
                        })
                    })
            })
            .catch((err) => {
                return res.status(500).json({
                    message: `Error: (Inexpected) ${err.message}`,
                    error: err
                })
            })
    }

    public async getUser(req: Request, res: Response): Promise<Response | any> {
        let userId  = req.params.id;
        Connection()
            .then((conn) => {
                Query(conn, queryRoute.findUser(parseInt(userId)))
                    .then((data) => {
                        return res.status(200).json({ data })
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            message: `Error: (Inexpected) ${err.message}`,
                            error: err
                        })
                    })
            })
            .catch((err) => {
                return res.status(500).json({
                    message: `Error: (Inexpected) ${err.message}`,
                    error: err
                })
            })
    }

    public async sendUser(req: Request, res: Response): Promise<Response | UserModel | any> {
        let user = {
            name: req.body.name,
            mail: req.body.mail,
            cnpj: req.body?.cnpj || null,
            company_name: req.body?.company_name || null,
            description_work: req.body?.description_work || null,
            password: req.body.password
        }

        Connection()
            .then((conn) => {
                Query(conn, queryRoute.sendUser(user))
                    .then((data) => {
                        return res.status(200).json({ data })
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            message: `Error: (Inexpected) ${err.message}`,
                            error: err
                        })
                    })
            })
            .catch((err) => {
                return res.status(500).json({
                    message: `Error: (Inexpected) ${err.message}`,
                    error: err
                })
            })
    }

    /*public async setUser(req: Request, res: Response): Promise<Response | any>{
        let setUser: IUser = {
            username: req.body.username,
            mail: req.body.mail,
            pass: req.body.pass,
            id_company: req.body.id_company,
            phone: req.body.phone,
            ref_id: req.body.ref_id
        }

        let userFiltered = Object.values(setUser).filter(item => (item.length != 0 && item != ''));

        res.json({setUser});

       Connection()
            .then((conn) => {
                Query(conn, queryRoute.sendUser(user))
                    .then((data) => {
                        return res.status(200).json({ data })
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            message: `Error: (Inexpected) ${err.message}`,
                            error: err
                        })
                    })
            })
            .catch((err) => {
                return res.status(500).json({
                    message: `Error: (Inexpected) ${err.message}`,
                    error: err
                })
            })

    }
*/

    public async login(req: Request, res: Response): Promise<Response | any> {
        let userDirective: IUserLoginDirective = {
            mail: req.body.mail,
            pass: req.body.pass
        }

        Connection()
            .then((conn) => {
                Query(conn, `SELECT id, name, mail FROM users WHERE mail = '${userDirective.mail}' AND password = md5('${userDirective.pass}')`)
                    .then((data) => {
                        const token = sign(
                            {
                                // @ts-ignore
                                id: data[0].id as string,
                                // @ts-ignore
                                name: data[0].name as string,
                            },
                            "cavalo",
                            {
                                expiresIn: '1d',
                            }
                        );
                        // @ts-ignore
                        data[0]['token'] = token;
                        return res.status(200).json({data})
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            message: `Error: (Inexpected) ${err.message}`,
                            error: err
                        })
                    })
            })
            .catch((err) => {
                return res.status(500).json({
                    message: `Error: (Inexpected) ${err.message}`,
                    error: err
                })
            })
    }



}

export default new UserRoute();