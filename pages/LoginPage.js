import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.logInButton = page.getByRole('button', { name: 'Log in' });
    this.invalidCredentialsError = page.getByText('Invalid email or password.');
    this.pageAnchor = page.getByRole('heading', { name: 'Log in' });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.logInButton.click();
  }

  async assertLoaded() {
    await expect(this.pageAnchor).toBeVisible();
  }

  async assertInvalidCredentialsError() {
    await expect(this.invalidCredentialsError).toBeVisible();
  }
}
