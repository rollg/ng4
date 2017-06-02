import {HomePage} from './home.po';

describe('home route', () => {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
        page.navigateTo();
    });

    it('should navigate to /home by default', () => {
        expect(page.getBrowserCurrentUrl()).toContain('/home');
    });

    it('should display message saying home works!', () => {
        expect(page.getParagraphText()).toEqual('home works!');
    });
});
