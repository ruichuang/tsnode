"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BranchRouter {
    constructor() {
        this.GOOGLE_GEOCODE_HOST = 'http://maps.google.com';
        this.GET_GEOCODE_PATH = '/maps/api/geocode/json?address=';
        this.locationOptions = {
            uri: 'uri',
            header: { 'User-Agent': 'Request-Promise' },
            json: true,
        };
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', this.getAll);
    }
    getAll(req, res, next) {
        let addr = req.query.addr;
        console.log(addr);
        console.log(this.locationOptions);
        // this.locationOptions['uri'] = this.GOOGLE_GEOCODE_HOST + this.GET_GEOCODE_PATH + addr.replace(/,/g, ' ').replace(/ +/g, '+');
        // console.log(this.locationOptions['uri']);
        // if (query) {
        //     res.status(200)
        //     .send({
        //         message: query,
        //         status: res.status
        //     });
        // } else {
        //     res.status(404)
        //     .send({
        //         message: 'failed',
        //         status: res.status
        //     })
        // }
    }
}
exports.BranchRouter = BranchRouter;
const branchRoutes = new BranchRouter();
branchRoutes.init();
exports.default = branchRoutes.router;
