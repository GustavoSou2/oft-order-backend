import IMaterial from "@Config/types/material.interface";
import WorksTypeModel from "@Config/types/works-type.interface";
import { Router, Response, Request, NextFunction } from "express";
import { Connection, Query } from "../../config/mysql/index.mysql";
import IWorksType from "./works-type.dto";
import { WorksTypeSQL } from "./works-type.sql";

class WorksTypeRouting {
    public async list(req: Request, res: Response): Promise<Response<IWorksType[]> | any> {
        let idUser = req.params.id_user;

        Connection()
            .then((conn) => {
                Query(conn, WorksTypeSQL.list(Number(idUser)))
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


    public async create(req: Request, res: Response): Promise<Response | IWorksType | any> {
        let worksType: WorksTypeModel = {
            description: req.body.description,
            weight: req.body.weight,
            id_user: req.body.id_user
        }

        Connection()
            .then((conn) => {
                Query(conn, WorksTypeSQL.create(worksType))
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
        let idMaterial = req.params.id_material;

        Connection()
            .then((conn) => {
                Query(conn, WorksTypeSQL.delete(Number(idMaterial)))
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

export default new WorksTypeRouting();
