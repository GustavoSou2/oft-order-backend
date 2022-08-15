import ClientModel from "@Config/types/client.interface";
import { Router, Response, Request, NextFunction } from "express";
import { Connection, Query } from "../../config/mysql/index.mysql";
import IClient from "./client.dto";
import { ClientSQL } from "./client.sql";

class ClientRouting {
    public async list(req: Request, res: Response): Promise<Response<IClient[]> | any> {
        let idUser = req.params.id_user;

        Connection()
            .then((conn) => {
                Query(conn, ClientSQL.list(Number(idUser)))
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


    public async create(req: Request, res: Response): Promise<Response | IClient | any> {
        let client: ClientModel = {
            name: req.body.name,
            phone: req.body.phone,
            id_works_provider: req.body.id_works_provider
        }

        Connection()
            .then((conn) => {
                Query(conn, ClientSQL.create(client))
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

    public async delete(req: Request, res: Response): Promise<void | any> {
        let idClient = req.params.id_user;

        Connection()
            .then((conn) => {
                Query(conn, ClientSQL.delete(Number(idClient)))
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
}

export default new ClientRouting();
