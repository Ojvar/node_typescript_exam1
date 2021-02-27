export const ServerConfig: ServerConfigType = {
    protocol: process.env.PROTOCOL || "http",
    host: process.env.HOST || "127.0.0.1",
    port: parseInt(process.env.PORT || "8085"),
};

/**
 * ServerConfig Type
 */
export type ServerConfigType = {
    protocol: string;
    host: string;
    port: number;

    internalUrl?: string;
    externalUrl?: string;
};
