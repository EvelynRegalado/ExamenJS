import { TwjRegaladoEvelynPage } from './app.po';

describe('twj-regalado-evelyn App', () => {
  let page: TwjRegaladoEvelynPage;

  beforeEach(() => {
    page = new TwjRegaladoEvelynPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
