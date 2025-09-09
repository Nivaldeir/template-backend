import { Request, Response, NextFunction } from 'express';

export interface IHttpServer {
  start(port: number): any;
  addRoutes(controllers: IController[]): void;
  settings(setting: IHttpServerSetting[]): void;
}

export interface IHttpServerSetting {
  setConfig(app: any): void;
}

export interface InputHttp {
  body?: any;
  params?: any;
  query?: any;
  headers?: any;
}

export interface OutputHttp {
  statusCode: number;
  body: any;
}

export interface IHttpRequest extends Request {
  body: any;
  params: any;
  query: any;
  headers: any;
}

export interface IHttpNextFunction extends NextFunction { }

export interface IController {
  path: string;
  method: string;
  middlewares?(req: IHttpRequest, res: Response, next: IHttpNextFunction): any[];
  handler(req: IHttpRequest, res: Response, next: IHttpNextFunction): Promise<void>;
}
