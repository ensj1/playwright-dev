import { test as base } from '@playwright/test';
import { HomePage } from './home.page';
import { FirefoxDesktopPage } from './firefox.page';


type MyFixtures = {
    homePage: HomePage;
    firefoxDesktopPage: FirefoxDesktopPage;
}


export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    firefoxDesktopPage: async ({ page }, use) => {
        await use(new FirefoxDesktopPage(page));
    }
});

export { expect } from '@playwright/test';
