import { AppMaxRecipesPage } from './app.po';

describe('app-max-recipes App', () => {
  let page: AppMaxRecipesPage;

  beforeEach(() => {
    page = new AppMaxRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
