import { User } from '../../domain/entities/user.entity';

export class UserPersistenceService {
  path = 'user';
  get(): User | null {
    const userJson = localStorage.getItem(this.path);
    if (!userJson) return null;
    return JSON.parse(userJson);
  }
  set(user: User) {
    localStorage.setItem(this.path, JSON.stringify(user));
  }
  clear() {
    localStorage.removeItem(this.path);
  }
}
