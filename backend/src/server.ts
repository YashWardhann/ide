import App from "@/app"; 
import ApiRoute from "./routes/api.routes";

const app = new App();
app.listen();

app.initializeRoutes([ new ApiRoute() ]);