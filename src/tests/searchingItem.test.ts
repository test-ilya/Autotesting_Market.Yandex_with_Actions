import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

const itemName = 'MacBook Air 13';

test('Searching item', async ({ page }) => {
    const mainPage = new MainPage(page);

    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await mainPage.openMainPage();
    await page.screenshot({ path: 'screenshot2.png', fullPage: true });
    await mainPage.inputInSearchString(itemName);
    await page.screenshot({ path: 'screenshot3.png', fullPage: true });
    await mainPage.clickSearchBtn();
    await page.screenshot({ path: 'screenshot4.png', fullPage: true });

    await expect(
        page.locator(mainPage.serpListSelector)
    ).toContainText(itemName);

});