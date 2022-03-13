import { SessionUserModel } from './session-user.model';

describe('UserModel', () => {
  let user: SessionUserModel;

  beforeAll(() => {
    user = new SessionUserModel({
      id: 1,
      email: 'fake@email.com',
      username: 'hombredeincognito',
      firstName: 'hombre',
      lastName: 'deincógnito',
      phone: '+34777777777',
      photoUrl: 'assets/img/user/empty.svg'
    });
  });

  it('should create', () => {
    expect(user).toBeTruthy();
  });

});
