import { test, expect } from '@playwright/test';

test('Click on button and expect text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    const button = page.getByText('Click for JS Alert');

    await button.click();

    const result = page.locator('#result');

    await expect(result).toBeVisible();
    await expect(result).toContainText('You successfully clicked an alert');
});
