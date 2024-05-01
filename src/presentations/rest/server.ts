/**
 * server.ts
 *
 * Express Server Rest API
 * Interacts with express middleware, routes, handlers,
 * usecase(application & services)
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 30 April 2024
 */

import express, { Express, Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import fileupload from 'express-fileupload';

import 'express-async-errors';
import 'reflect-metadata';
import { routes } from './router';
import expressPinoLogger from 'express-pino-logger';
import { Logger } from '../../core/utils/logger';
import {
    PINO_LOGGER,
    PinoLogger,
} from '../../core/services/logger/pino-logger';
import { ErrorMiddleware } from './middlewares';

// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger/swagger-output.json';

export class APIServer {
    public static runServer = async (): Promise<void> => {
        const app: Express = express();

		// Create an HTTP server
		const server = http.createServer(app);

        // map port
        const port =
            (Number(process.env.API_SERVICE_PORT) as unknown as number) || 8080;

        // handle and manage cross-origin calls
        app.use(
            cors({
                origin: '*',
                methods: ['GET', 'POST', 'PUT', 'DELETE'],
                allowedHeaders: ['Content-Type', 'Authorization'],
            }),
        );

        // support json encoded bodies
        app.use(express.json());

        app.use(express.urlencoded({ extended: true })); // support encoded bodies

        // Support Multipart/form-data Middleware
        app.use(fileupload());

        // Error Middleware
        app.use(ErrorMiddleware);

        // Logger Middleware
        app.use(expressPinoLogger({ logger: PINO_LOGGER.logger }));

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        BigInt.prototype.toJSON = function (): number {
            return Number(this.toString());
        };

        // handle routes
        app.use(
            '/healthcheck',
            async (_request: Request, response: Response) => {
                response.status(200).json({ message: 'Hello Server' });
            },
        );

        // Import Routes
        app.use('/api/v1/', routes);

        // TODO: Swagger
        // app.use(
        //     '/docs',
        //     swaggerUi.serve,
        //     swaggerUi.setup(swaggerDocument, {
        //         swaggerOptions: { persistAuthorization: true },
        //     }),
        // );

		// TODO: Websocket
		// Create a WebSocket server
		// const wss = new WebSocketServer({ server });

		// wss.on('connection', (ws) => {
		//   // Connection is up, let's add a simple event
		//   ws.on('message', (message) => {
		// 	// Log the received message
		// 	console.log('received: %s', message);
		//   });
	
		//   // Send a message
		//   ws.send('Hello! You are connected to the WebSocket server.');
		// });

        server.listen(port, () => {
            console.log(`[Server]: API is running at http://localhost:${port}`);
            console.log(
                `[Server]: Swagger is running at http://localhost:${port}/docs`,
            );
        });
    };
}
