import { expect, Locator, Page } from "@playwright/test";

export class FirefoxDesktopPage {

    public url = 'https://www.mozilla.org/en-US/firefox/new/';
    readonly page: Page;
    readonly $firefoxLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.$firefoxLogo = this.page.locator('.c-sub-navigation-title a', { hasText: "Firefox" });
    }

    public async goto() {
        await this.page.goto(this.url);
    }

    public async isReady() {
        return expect(this.$firefoxLogo).toBeVisible();
    }
}