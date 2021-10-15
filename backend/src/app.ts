import express from "express";
import cors from "cors"; 
import helmet from "helmet";
import { Route } from "./interfaces";
import  { createServer, Server as HttpServer} from "http";
import { Server } from "socket.io";
import { initializeListeners } from "@/listeners";

class App {
    public app : express.Application;
    public port : string | number;
    public httpServer : HttpServer;
    public io : Server;
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080; 
        this.httpServer = createServer(this.app);

        this.initializeWebSockets();
        this.initializeMiddleware();
    }

    listen() {
        this.httpServer.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }  

    initializeMiddleware() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());

        this.app.use((req, res, next) => {
            console.log(`Incoming ${req.method} request to ${req.url}`);
            return next();
        });

        this.app.use((error, req, res, next) => {
            console.log(`Error: ${error.message}`);
            return res.status(error.status).json({ message: error.message });
        });
    }

    initializeRoutes(routes: Route[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }

    initializeWebSockets() {
        this.io = new Server(this.httpServer, {
            cors: {
                origin: "http://localhost:3000"
            }
        });
        initializeListeners(this.io);
    }
}

export default App;