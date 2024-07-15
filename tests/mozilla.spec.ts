import { test } from "../pages/base";

test('go to firefox desktop page', async ({ homePage, firefoxDesktopPage }) => {
    await homePage.goto();
    await homePage.isReady();
    await homePage.gotoFirefoxPage();
    await firefoxDesktopPage.isReady();
});
