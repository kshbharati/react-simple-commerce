import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { CommonRouteConfig } from './common/common.routes.config';
import { UserRoutes } from './users/users.route.config';
import debug from 'debug';

import dbConfig from './common/common.models.js';
import { Sequelize } from 'sequelize/types';

const app:express.Application = express();
const server:http.Server=http.createServer(app);

const PORT= process.env.PORT || 8080;

const routes:Array<CommonRouteConfig>=[];
const debugLog:debug.IDebugger=debug('app');

app.use(express.json());

app.use(cors());

const loggerOptions:expressWinston.LoggerOptions={
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all:true})
    ),
};


app.use(expressWinston.logger(loggerOptions));

routes.push(new UserRoutes(app));

const runningMessage= 'Server running at http://localhost:'+PORT;

app.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(runningMessage);
});

server.listen(PORT,()=>{
    routes.forEach((route:CommonRouteConfig)=>{
        let rtName:any = route.getName();
        debugLog('Routes configured for '+rtName);
    });
    console.log(runningMessage);
});