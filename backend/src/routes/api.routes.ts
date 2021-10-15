import { Router } from "express";

import { Route, Controller } from "@/interfaces";
import { ApiController } from "@/controllers/api.controller";

class ApiRoute implements Route {
    public path = "/api"; 
    public router: Router;
    public controller = new ApiController();

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`${this.path}/exec`, this.controller.evaluate);
    }
}

export default ApiRoute;