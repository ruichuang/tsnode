import { Router, Request, Response, NextFunction } from "express";
import * as http from 'http'; 
import * as https from 'https'; 
import * as rp from 'request-promise-native'; 

export class BranchRouter {
    

    GOOGLE_GEOCODE_HOST = 'http://maps.google.com';
    GET_GEOCODE_PATH = '/maps/api/geocode/json?address=';

    router: Router;

    locationOptions = {
      uri:  'uri',
      header: { 'User-Agent': 'Request-Promise' },
      json: true,
    };
    
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/', this.getAll);
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        
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

const branchRoutes = new BranchRouter();
branchRoutes.init();

export default branchRoutes.router;