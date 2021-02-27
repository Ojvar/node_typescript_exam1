/**
 * Home route
 */
import { Application } from "express";

export default class UserRoute {
    constructor(app: Application) {
        app.get("/user/admin", (req, res, next) => {
            res.render("user/admin.pug");
        });
    }
}
