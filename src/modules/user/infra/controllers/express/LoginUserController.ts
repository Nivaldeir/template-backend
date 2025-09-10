import { LoginUserUseCase } from "../../../application/usecases/LoginUserUseCase";
import { IHttpNextFunction, IHttpRequest } from "../../../../../shared/types/http";
import { Response } from "express";
import { LoginDriverInput } from "../../../application/usecases/input/LoginDriverInput";

export class LoginUserController {
  path = "/users/login";
  method = "post";
  middlewares = (_req: IHttpRequest, _res: Response, _next: IHttpNextFunction) => [];

  constructor(
    private loginUserUseCase: LoginUserUseCase,
  ) {
  }

  async handler(req: IHttpRequest, res: Response) {
    const input = LoginDriverInput.from(req.body);
    const output = await this.loginUserUseCase.execute(input);
    res.status(200).json(output);
  }
}