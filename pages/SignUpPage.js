import { expect } from '@playwright/test';

export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.fullNameInput = page.getByRole('textbox', { name: 'Full name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', {
      name: 'Password',
      exact: true,
    });
    this.confirmPasswordInput = page.getByRole('textbox', {
      name: 'Confirm password',
    });
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.pageAnchor = page.getByRole('link', { name: 'Relay4U Relay4U' });
  }

  async signUp(fullName, email, password) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.signUpButton.click();
  }

  async assertLoaded() {
    await expect(this.pageAnchor).toBeVisible();
  }
}
