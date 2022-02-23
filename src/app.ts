// @ts-ignore
import express, { Response, Request, NextFunction } from "express";
import routes from "./routes/index";
import cors from 'cors';

class App {
    public app!: express.Application;

    constructor() {
        this.app = express();
        this.cors();
        this.routes();
    }

    private routes() {
        this.app.use('/api/v1/orders/', routes);
    }

    private cors() {
        const allowedOrigins = ['*'];
        const options: cors.CorsOptions = {
            origin: allowedOrigins
        }
        this.app.use(cors(options))
        this.app.use(express.json())
    }
}


export default new App().app