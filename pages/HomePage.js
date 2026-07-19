import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.signUpLink = page.getByRole('link', { name: 'Sign up for free' });
    this.logInLink = page.getByRole('link', {
      name: 'I already have an account',
    });
    this.pageAnchor = page.getByRole('heading', {
      name: 'Your data, your columns',
    });
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async clickLogIn() {
    await this.logInLink.click();
  }

  async assertLoaded() {
    await expect(this.pageAnchor).toBeVisible();
  }
}
