import z from "zod";
import { RoleUser } from "../../../../../shared/utils/enum/RoleUser";

export class CreateUserDriverInput {
  static schema = z.object({
    email: z.string({ error: 'Email é obrigatório' }).min(1, 'Email é obrigatório').email('Email inválido'),
    password: z.string({ error: 'Senha é obrigatória' }).min(6, 'Senha é obrigatória e deve ter pelo menos 6 caracteres'),
    name: z.string({ error: 'Nome é obrigatório' }).min(1, 'Nome é obrigatório'),
    role: z.nativeEnum(RoleUser).default(RoleUser.USER),
    avatar: z.string().optional().default(''),
    phone: z.string().optional().default(''),
    dateBirth: z.date().optional().default(new Date()),
  });

  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: RoleUser,
    public readonly avatar: string | undefined,
    public readonly phone: string | undefined,
    public readonly dateBirth: Date | undefined,
  ) { }

  static from(data: unknown): CreateUserDriverInput {
    const output = CreateUserDriverInput.schema.parse(data);
    return new CreateUserDriverInput(
      output.name,
      output.email,
      output.password,
      output.role,
      output.avatar,
      output.phone,
      output.dateBirth
    );
  }
}
