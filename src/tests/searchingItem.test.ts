import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

const itemName = 'MacBook Air 13';

test('Searching item', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.openMainPage();
    await mainPage.inputInSearchString(itemName);
    await mainPage.clickSearchBtn();

    await expect(
        page.locator(mainPage.serpListSelector)
    ).toContainText(itemName);

});