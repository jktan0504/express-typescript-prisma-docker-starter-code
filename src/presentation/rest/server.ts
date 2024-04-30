import 'express-async-errors';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import fileupload from 'express-fileupload';
// import { routes } from './common/routes.index';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger/swagger-output.json';
// import { errorHandler } from './common/exceptions/error-handler';
import fileupload from 'express-fileupload';

const app: Express = express();

// map port
const port =
    (Number(process.env.WMC_BACKOFFICE_API_PORT) as unknown as number) || 8080;

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

app.use(fileupload());

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
BigInt.prototype.toJSON = function (): number {
    return Number(this.toString());
};

// handle routes
app.use('/healthcheck', async (_request: Request, response: Response) => {
    response.status(200).json({ message: 'Hello Server' });
});

app.use('/api/v1/', routes);

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
        swaggerOptions: { persistAuthorization: true },
    }),
);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`[Server]: API is running at http://localhost:${port}`);
    console.log(
        `[Server]: Swagger is running at http://localhost:${port}/docs`,
    );
});
