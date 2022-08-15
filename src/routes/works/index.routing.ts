import IMaterial from "@Config/types/material.interface";
import WorksTypeModel from "@Config/types/works-type.interface";
import { Router, Response, Request, NextFunction } from "express";
import { Connection, Query } from "../../config/mysql/index.mysql";
import IWorks from "./works.dto";
import { WorksSQL } from "./works.sql";

class WorksRouting {
    public async list(req: Request, res: Response): Promise<Response<IWorks[]> | any> {
        let idUser = req.params.id_user;

        Connection()
            .then((conn) => {
                Query(conn, WorksSQL.list(Number(idUser)))
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


    public async create(req: Request, res: Response): Promise<Response | IWorks | any> {
        let works: IWorks = {
            id_work_type: req.body.id_work_type,
            id_user: req.body.id_user,
            id_client: req.body.id_client,
            description: req.body.description,
            message: req.body.message,
            has_participants: req.body.has_participants,
            status: req.body.status,
            work_total_value: req.body.work_total_value,
            material_total_value: req.body.material_total_value
        };

        Connection()
            .then((conn) => {
                Query(conn, WorksSQL.create(works))
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
            });
    }

    public async delete(req: Request, res: Response): Promise<void | any> {
        let idMaterial = req.params.id_material;

        Connection()
            .then((conn) => {
                Query(conn, WorksSQL.delete(Number(idMaterial)))
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

    public async coutingByStatus(req: Request, res: Response): Promise<Response<IWorks[]> | any> {
        let idUser = req.params.id_user;

        Connection()
            .then((conn) => {
                Query(conn, WorksSQL.countByStatus(Number(idUser)))
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

export default new WorksRouting();
