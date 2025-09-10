import { container } from "tsyringe";
import { RegisterUserUseCase } from "../../application/usecases/RegisterUserUseCase";
import { RegisterUserController } from "./express/RegisterUserController";
import { IUserRepository } from "../../application/driven/ports/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { Controllers } from "../../../../infra/decorators/controller";
import { LoginUserController } from "./express/LoginUserController";
import { LoginUserUseCase } from "../../application/usecases/LoginUserUseCase";

container.register<IUserRepository>("IUserRepository", UserRepository);

const registerUserUseCase = new RegisterUserUseCase(container.resolve("IUserRepository"));
const loginUserUseCase = new LoginUserUseCase(container.resolve("IUserRepository"));

Controllers.add(new RegisterUserController(registerUserUseCase));
Controllers.add(new LoginUserController(loginUserUseCase));