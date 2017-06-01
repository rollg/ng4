import {browser, by, element} from 'protractor';

export class DefaultPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    getParagraphCount() {
        return element.all(by.css('app-root h1')).count();
    }

    getButtonElement() {
        return element(by.css('button[type=button]'));
    }
}
