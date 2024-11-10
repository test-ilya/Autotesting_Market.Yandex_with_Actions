import { Page } from '@playwright/test';

export class MainPage {
    private readonly contentSelector = '[data-auto="content"]'
    private readonly searchInputSelector = '[data-auto="search-input"]';
    private readonly searchButtonSelector = '[data-auto="search-button"]';
    public readonly serpListSelector = '[data-auto="SerpList"]';

    constructor(public page: Page) { }

    public async openMainPage() {
        await this.page.goto('/');

        const isContentSelectorDisplayed = await this.page.isVisible(this.contentSelector);
        // if(isContentSelectorDisplayed) 
    }

    public async inputInSearchString(itemName: string) {
        await this.page.fill(this.searchInputSelector, `${itemName}`);
    }

    public async clickSearchBtn() {
        await this.page.click(this.searchButtonSelector);
    }


}