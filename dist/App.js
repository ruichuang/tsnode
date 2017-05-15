"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const BranchRouter_1 = require("./routes/BranchRouter");
class App {
    // config on express insrance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(cors());
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'bigdingBE node ts sever'
            });
        });
        // all router endpoints configed here 
        this.express.use('/', router);
        this.express.use('/api/branches', BranchRouter_1.default);
    }
}
exports.default = new App().express;
