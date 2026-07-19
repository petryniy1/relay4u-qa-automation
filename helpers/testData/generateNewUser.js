import { faker } from '@faker-js/faker';

export function generateNewUser() {
  const user = {
    fullName: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: `${faker.internet.password({ length: 8 })}A1!`,
  };

  return user;
}
