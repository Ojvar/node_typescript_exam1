/**
 * Home route
 */
import { Application } from "express";

export default class HomeRoute {
    constructor(app: Application) {
        app.get("/", (req, res, next) => {
            res.render("home.pug");
        });

        app.get("/about", (req, res, next) => {
            res.render("about.pug");
        });
    }
}
