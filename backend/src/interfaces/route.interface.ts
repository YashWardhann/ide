import { Router } from "express";
import Controller from "./controller.interface";

export default interface Route {
    path: string; 
    router : Router; 
    controller?: Controller;
    initializeRoutes() : void; 
}