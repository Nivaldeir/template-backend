export class UserNotPermission extends Error {
  constructor(message: string = "User not permission") {
    super(message);
    this.name = "UserNotPermission";
  }
}