import { CreateUserDriverInput } from "../../../application/usecases/input/CreateUserDriverInput";
import { Response } from "express";
import { IController, IHttpRequest, IHttpNextFunction } from "../../../../../shared/types/http";
import { injectable } from "tsyringe";
import { RegisterUserUseCase } from "../../../application/usecases/RegisterUserUseCase";

@injectable()
export class RegisterUserController implements IController {
  path = "/users/register";
  method = "post";
  middlewares = (_req: IHttpRequest, _res: Response, _next: IHttpNextFunction) => [];

  constructor(
    private registerUserUseCase: RegisterUserUseCase,
  ) {
  }
  async handler(req: IHttpRequest, res: Response) {
    const input = CreateUserDriverInput.from(req.body);
    const output = await this.registerUserUseCase.execute(input);
    res.status(201).json(output);
  }
}