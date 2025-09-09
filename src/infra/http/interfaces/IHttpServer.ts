import { IHttpServer, IHttpServerSetting } from "../../../shared/types/http";

export interface IExpressServer extends IHttpServer {
  app: any;
  addRoutes(controllers: any[]): void;
  settings(setting: IHttpServerSetting[]): void;
}

export interface IExpressSetting extends IHttpServerSetting {
  setConfig(app: any): void;
}
