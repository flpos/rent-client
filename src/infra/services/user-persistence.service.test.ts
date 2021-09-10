import { UserPersistenceService } from './user-persistence.service';

const service = new UserPersistenceService();

const userData = {
  id: 'abc123',
  email: 'abc@123.com',
  username: 'abc',
};

describe('user persistence service', () => {
  it('saves a user', () => {
    service.set(userData);
    const savedData = JSON.parse(localStorage.getItem(service.path) ?? '');
    expect(savedData).toEqual(userData);
  });
  it('retrieves a user', () => {
    const savedData = service.get();

    expect(savedData).toEqual(userData);
  });
});
