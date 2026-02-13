import { test, expect } from '@playwright/test';

test('Hover over third user and verify caption is visible', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    const figure = page.locator('.figure').nth(2);

    await figure.hover();

    await expect(figure.locator('.figcaption')).toBeVisible();
    await expect(figure.locator('.figcaption')).toContainText('name: user3')
});
