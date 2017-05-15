import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import  BranchRouter from "./routes/BranchRouter";

class App {

    public express: express.Application;

    // config on express insrance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(cors());
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({
                message: 'bigdingBE node ts sever'
            });
        });
        
        // all router endpoints configed here 
        this.express.use('/', router);
        this.express.use('/api/branches', BranchRouter);
    }


}

export default new App().express;