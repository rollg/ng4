import {AboutPage} from './about.po';

describe('about route', () => {
    const page = new AboutPage();

    beforeEach(() => {
        page.navigateTo();
    });

    it('should not navigate to about route by default', () => {
        expect(page.getCurrentUrl()).not.toContain('/about');
    });

    it('should display message saying about works!', () => {
        page.navigateToAbout();
        expect(page.getParagraphText()).toEqual('about works!');
    });
});
