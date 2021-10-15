import Controller from "@/interfaces/controller.interface";

export class ApiController implements Controller {
    evaluate(req, res, next) {
        return res.status(200).json({ output: "Hello World!" });
    }
}