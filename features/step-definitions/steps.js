import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { remote } from 'webdriverio'


import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()

    // const capabilities = (await import('../../wdio.conf.js')).config.capabilities[0];
    //
    // const anotherBrowser = await remote({
    //     capabilities: capabilities
    // })
    //
    // await anotherBrowser.url('https://webdriver.io');
    //
    // await anotherBrowser.closeWindow();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

