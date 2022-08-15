// @ts-ignore
import { Router } from "express";
import MaterialRouting from "./material/index.route";
import UserRoute from "./users/index.route";
import WorksTypeRouting from "./works-type/index.routing";
import ClientRouting from "./client/index.routing";
import WorksRouting from "./works/index.routing";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hi Dev');
})

routes.get('/users', UserRoute.getAllUsers)
routes.get('/user/:id', UserRoute.getUser)
routes.post('/user', UserRoute.sendUser)
routes.post('/login', UserRoute.login)

// Material
routes.get('/material/:id_user', MaterialRouting.list)  
routes.post('/material', MaterialRouting.create)
routes.delete('/material/:id_material', MaterialRouting.delete)

// Works Type
routes.get('/works_type/:id_user', WorksTypeRouting.list)  
routes.post('/works_type', WorksTypeRouting.create)
routes.delete('/works_type/:id_works_type', WorksTypeRouting.delete)

// Client
routes.get('/client/:id_user', ClientRouting.list)  
routes.post('/client', ClientRouting.create)
routes.delete('/client/:id_user', ClientRouting.delete)

// Works
routes.get('/works/:id_user', WorksRouting.list)
routes.post('/works', WorksRouting.create)
routes.delete('/works/:id_works_type', WorksRouting.delete)
routes.get('/works/counting_status/:id_user', WorksRouting.coutingByStatus)


export default routes;