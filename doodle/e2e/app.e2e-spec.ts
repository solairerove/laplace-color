import { DoodlePage } from './app.po';

describe('doodle App', function() {
  let page: DoodlePage;

  beforeEach(() => {
    page = new DoodlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
