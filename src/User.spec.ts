import { UserCreateSchema } from './User';

describe('User', () => {
  describe('UserCreateSchema', () => {
    it('should be defined', () => {
      expect(UserCreateSchema).toBeDefined();
    });

    it('validates a valid user with no groups', () => {
      const user = {
        email: 'admin@vandeley-labs.com',
        username: 'admin',
        password: '123123123',
      };

      UserCreateSchema.parse(user);
    });

    it('validates a valid user with empty group', () => {
      const user = {
        email: 'admin@vandeley-labs.com',
        username: 'admin',
        password: '123123123',
        groups: [],
      };

      UserCreateSchema.parse(user);
    });

    it('validates a valid user with one group', () => {
      const user = {
        email: 'admin@vandeley-labs.com',
        username: 'admin',
        password: '123123123',
        groups: ['cm90ysvea00003b6t49fb81da'],
      };

      UserCreateSchema.parse(user);
    });

    it('validates a valid user with two group', () => {
      const user = {
        email: 'admin@vandeley-labs.com',
        username: 'admin',
        password: '123123123',
        groups: ['cm90ysvea00003b6t49fb81da', 'cm90ysvea00003b6t49fb81db'],
      };

      UserCreateSchema.parse(user);
    });
  });
});
