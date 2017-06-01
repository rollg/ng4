import {DefaultPage} from './app.po';

describe('angular4 App', () => {
    let page: DefaultPage;

    beforeEach(() => {
        page = new DefaultPage();
        page.navigateTo();
    });

    it('should display message saying app works', () => {
        expect(page.getParagraphText()).toEqual('app works!');
    });

    it('should find only one h1 elements', () => {
        expect(page.getParagraphCount()).toEqual(1);
    });

    it('should add another header on button click', () => {
        const buttonElement = page.getButtonElement();
        buttonElement.click();

        const headersCount = page.getParagraphCount();
        expect(headersCount).toEqual(2);
    });
});
