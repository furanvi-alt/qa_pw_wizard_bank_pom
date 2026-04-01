import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.searchCustomerInput = page.getByPlaceholder('Search Customer');
    this.firstTableRow = page.getByRole('row').last();
    this.deleteCustomerButton = page.getByRole('row').last().getByRole('button', {
      name: 'Delete',
    });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async fillSearchCustomerInput(customer) {
    await this.searchCustomerInput.fill(customer);
  }
  async clickDeleteCustomerButton() {
    await this.deleteCustomerButton.click();
  }
  async assertFirstTableRowContainsText(text) {
  await expect(this.firstTableRow).toContainText(text);
}
  async assertFirstTableRowNotContainsText(text) {
    await expect(this.firstTableRow).not.toContainText(text);
  }
}
