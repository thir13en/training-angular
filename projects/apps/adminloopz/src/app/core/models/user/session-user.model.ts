export class SessionUserModel {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly photoUrl: string;

  constructor(userRes: any) {
    this.id = userRes.id;
    this.email = userRes.email;
    this.username = userRes.username;
    this.firstName = userRes.firstName;
    this.lastName = userRes.lastName;
    this.phone = userRes.phone;
    this.photoUrl = userRes.photoUrl;
  }
}
