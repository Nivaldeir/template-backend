import { IController, IHttpServer } from "../../shared/types/http";
import { Controllers } from "../decorators/controller";

export class App {
  constructor(
    private readonly server: IHttpServer,
  ) { }

  start() {
    const controllers = Controllers.gets();
    this.server.addRoutes(controllers as IController[]);
    this.server.start(3000);
  }
}