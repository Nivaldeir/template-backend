import { injectable, inject } from "tsyringe";
import { CreateUserDriverInput } from "./input/CreateUserDriverInput";
import { CreateUserDrivenOuput } from "./output/CreateUserDrivenOuput";
import { IUserRepository } from "../driven/ports/IUserRepository";
import { UserEntity } from "../../domain/User";


@injectable()
export class RegisterUserUseCase {

  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository,
  ) { }

  async execute(input: CreateUserDriverInput): Promise<CreateUserDrivenOuput> {
    const user = UserEntity.create({
      email: input.email,
      password: input.password,
      name: input.name,
      role: input.role,
    });
    await this.userRepository.create(user);
    console.log(user.toJSON());
    return new CreateUserDrivenOuput('Usuário criado com sucesso');
  }
}