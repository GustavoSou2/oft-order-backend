// @ts-ignore
import { Router } from "express";
import UserRoute from "./users/index.route";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hi Dev');
})

routes.get('/users', UserRoute.getAllUsers)

routes.get('/user/:id', UserRoute.getUser)

routes.post('/sendUser', UserRoute.sendUser)

routes.post('/setUser', UserRoute.setUser)

export default routes;