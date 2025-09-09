export class CreateUserDrivenOuput {

  constructor(public readonly message: string) { }

  static from(data: CreateUserDrivenOuput): CreateUserDrivenOuput {
    return new CreateUserDrivenOuput(data.message);
  }
}
