import { IController } from "../../shared/types/http";

export class Controllers {
  private static controllers: IController[] = [];

  static add(controller: IController) {
    this.controllers.push(controller);
  }

  static gets() {
    return this.controllers;
  }
}
