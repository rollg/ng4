import {browser, by, element} from 'protractor';

export class AboutPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('p')).getText();
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    navigateToAbout() {
        element(by.css('a[href="/about"]')).click();
    }
}
