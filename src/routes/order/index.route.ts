import IMaterial from "@Config/types/material.interface";
import { Router, Response, Request, NextFunction } from "express";
import { Connection, Query } from "../../config/mysql/index.mysql";
import { MaterialModel } from "./order.dto";
import { MaterialRoutingQueries } from "./sql.query";

class MaterialRouting {
    
    public async list(req: Request, res: Response): Promise<Response<MaterialModel[]> | any> {
        let idUser = req.params.id_user;

        Connection()
            .then((conn) => {
                Query(conn, MaterialRoutingQueries.list(Number(idUser)))
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


    public async create(req: Request, res: Response): Promise<Response | MaterialModel | any> {
        let material: IMaterial = {
            description: req.body.description,
            code: req.body.code,
            id_user: req.body.id_user,
            value: req.body.value,
        }

        Connection()
            .then((conn) => {
                Query(conn, MaterialRoutingQueries.create(material))
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
                Query(conn, MaterialRoutingQueries.delete(Number(idMaterial)))
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

export default new MaterialRouting();
