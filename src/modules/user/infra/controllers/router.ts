import { container } from "tsyringe";
import { RegisterUserUseCase } from "../../application/usecases/RegisterUserUseCase";
import { RegisterUserController } from "./express/RegisterUserController";
import { IUserRepository } from "../../application/driven/ports/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { Controllers } from "../../../../infra/decorators/controller";

container.register<IUserRepository>("IUserRepository", UserRepository);
container.register<RegisterUserUseCase>("RegisterUserUseCase", RegisterUserUseCase);

Controllers.add(new RegisterUserController(container.resolve(RegisterUserUseCase)));