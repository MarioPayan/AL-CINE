import { ALCINEPage } from './app.po';

describe('al-cine App', () => {
  let page: ALCINEPage;

  beforeEach(() => {
    page = new ALCINEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
