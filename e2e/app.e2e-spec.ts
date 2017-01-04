import { CffringeDashboardPage } from './app.po';

describe('cffringe-dashboard App', function() {
  let page: CffringeDashboardPage;

  beforeEach(() => {
    page = new CffringeDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
