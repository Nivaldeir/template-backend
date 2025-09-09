export class UserNotActived extends Error {
  constructor(message: string = "User not actived") {
    super(message);
    this.name = "UserNotActived";
  }
}