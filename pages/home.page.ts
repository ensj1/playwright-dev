import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    public url = 'https://www.mozilla.com';
    readonly page: Page;
    readonly $firefoxBrowserMenu: Locator;
    readonly $firefoxDesktopLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.$firefoxBrowserMenu = this.page.getByRole('link', { name: 'Firefox Browsers' });
        this.$firefoxDesktopLink = this.page.getByRole('heading', { name: 'Firefox for Desktop' });
    }

    public async goto() {
        await this.page.goto(this.url);
    }

    public async isReady() {
        return expect(this.$firefoxBrowserMenu).toBeVisible();
    }

    public async gotoFirefoxPage() {
        await this.$firefoxBrowserMenu.hover().then(async () => {
            await this.$firefoxDesktopLink.click();
        });
    }
}