import { test, expect } from '@playwright/test';

test('Click checkbox and verify it becomes checked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox = page.locator('input[type="checkbox"]').nth(0);

    await expect(checkbox).not.toBeChecked();

    await checkbox.click();

    await expect(checkbox).toBeChecked();
});
