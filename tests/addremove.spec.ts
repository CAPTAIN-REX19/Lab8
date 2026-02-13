import { test, expect } from '@playwright/test';

test('Click Add Element and verify new element appears', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    const addButton = page.getByText('Add Element');
    await addButton.click();

    await expect(page.locator('.added-manually')).toBeVisible();
});
