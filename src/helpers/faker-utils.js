import { faker } from '@faker-js/faker';
import { generateRandomNumber } from './utils';

export const createRandomUser = (id) => ({
  id,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: generateRandomNumber(18, 60),
  email: faker.internet.email(),
  role: generateRandomNumber(1, 2)
});
