import {browser, by, element} from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/');
    };

    getBrowserCurrentUrl() {
        return browser.getCurrentUrl();
    }

    getParagraphText() {
        return element(by.css('p')).getText();
    };
}
