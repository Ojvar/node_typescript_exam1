import DotEnv from "dotenv";
import { ServerModule } from "./modules/server-module";

/**
 * Bootstrap module
 */
export class Bootstrap {
    private serverModule?: ServerModule;

    /**
     * Ctr
     */
    constructor() {
        this.init();
    }

    /**
     * Init modules
     */
    private async init() {
        DotEnv.config();
    }

    /**
     * Run function
     */
    public async run() {
        this.serverModule = new ServerModule();
        await this.serverModule?.boot();
        await this.serverModule?.listen();
    }
}
