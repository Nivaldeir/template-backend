import express from "express";
import { IHttpServerSetting, IController, IHttpRequest, IHttpNextFunction } from "../../../shared/types/http";
import { IExpressServer } from "../interfaces/IHttpServer";
import { logger } from "../../../shared/utils/lib/log";
export default class ExpressAdapter implements IExpressServer {

  app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  start(port: number) {
    return this.app.listen(port, () => {
      logger.info(`Server is running on port ${port}`);
    });
  }

  addRoutes(controllers: IController[]) {
    controllers.forEach((controller) => {
      const path = controller.path;
      const method = controller.method;
      const handler = controller.handler;
      try {
        if (typeof (this.app as any)[method] === "function") {
          (this.app as any)[method](path, (req: IHttpRequest, res: any, next: IHttpNextFunction) => {
            handler.bind(controller)(req, res, next).catch(next);
          });
          logger.info(`[ ${method.toUpperCase()} ] ${path}`);
        } else {
          logger.error(`Método HTTP inválido: ${method}`);
        }
      } catch (error) {
        logger.error(`Erro ao adicionar rota: ${error}`);
      }
    });
  }

  settings(settings: IHttpServerSetting[]) {
    settings.forEach((setting) => {
      setting.setConfig(this.app);
    });
  }
}