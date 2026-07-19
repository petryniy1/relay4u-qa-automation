import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SignUpPage } from '../../pages/SignUpPage';
import { generateNewUser } from '../../helpers/testData/generateNewUser';

test('TC-AUTH-001: Successful registration with valid data', async ({
  page,
}) => {
  const user = generateNewUser();
  const homePage = new HomePage(page);
  const signUpPage = new SignUpPage(page);

  await homePage.goto();
  await homePage.clickSignUp();

  await signUpPage.assertLoaded();

  await signUpPage.signUp(user.fullName, user.email, user.password);
});
