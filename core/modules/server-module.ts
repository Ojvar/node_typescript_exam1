import { resolve } from "path";
import { readdirSync } from "fs";
import Express, { Application } from "express";
import BodyParser from "body-parser";
import { ServerConfigType } from "../config/server-config";

/**
 * Server module
 */
export class ServerModule {
    private config?: ServerConfigType;
    private app?: Application;
    private internalUrl: string = "";

    /**
     * Boot Application
     */
    public async boot() {
        await this.loadConfig();

        this.app = Express();

        await this.setupPug();
        await this.setupBodyParser();

        await this.setupRoutes();
    }

    /**
     * Setup BodyParser
     */
    private async setupBodyParser() {
        this.app?.use(Express.json());
        this.app?.use(BodyParser.urlencoded({ extended: true, limit: "5M" }));
    }

    /**
     * Setup routes
     */
    private async setupRoutes() {
        const basePath: string = resolve("./routes");
        const files: Array<string> = readdirSync(basePath);

        for (let i = 0; i < files.length; ++i) {
            const file: string = resolve(basePath, files[i]);

            const RouteModule = (await import(file)).default;
            await new RouteModule(this.app as Application);
        }
    }

    /**
     * Setup pug
     */
    private async setupPug() {
        this.app?.set("view engine", "pug");
        this.app?.set("views", resolve("./views"));
    }

    /**
     * Start listening
     */
    public async listen() {
        this.internalUrl = `${this.config?.protocol}://${this.config?.host}:${this.config?.port}`;

        this.app?.listen(
            this.config?.port as number,
            this.config?.host as string,
            () => {
                console.info(`
    Server started successfully
            POST:       ${this.config?.port}
            HOST:       ${this.config?.host}
            PROTOCOL:   ${this.config?.protocol}
            
            INTERNAL-URL:   ${this.internalUrl}
`);
            }
        );
    }

    /**
     * Load config
     */
    private async loadConfig() {
        const { ServerConfig } = await import("../config/server-config");

        this.config = ServerConfig;
    }
}
