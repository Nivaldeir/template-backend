import { z } from 'zod';

export class LoginDriverInput {
  static schema = z.object({
    email: z.email('Email inválido'),
    password: z.string().min(1, 'Senha é obrigatória'),
  });

  private constructor(
    public readonly email: string,
    public readonly password: string
  ) { }

  static from(data: unknown): LoginDriverInput {
    const output = LoginDriverInput.schema.parse(data);
    return new LoginDriverInput(output.email, output.password);
  }
}
