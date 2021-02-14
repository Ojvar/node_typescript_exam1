import { resolve } from "path";
import {
    default as Express,
    Application,
    Request,
    Response,
    NextFunction,
} from "express";

/**
 * Server class
 */
export class Server {
    private port: number = 8585;
    private app?: Application;

    /**
     * Run server
     */
    public run() {
        /* Create app */
        this.app = Express();

        /* Setup pug  */
        this.app.set("views", resolve("./views"));
        this.app.set("view engine", "pug");

        /* Define routes */
        this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
            res.render("home.pug");
        });

        this.app.get(
            "/about",
            (req: Request, res: Response, next: NextFunction) => {
                res.render("about.pug");
            }
        );

        /* Start server */
        this.app.listen(this.port, () => {
            console.info(
                `Server running at port http://localhost:${this.port}`
            );
        });
    }
}
