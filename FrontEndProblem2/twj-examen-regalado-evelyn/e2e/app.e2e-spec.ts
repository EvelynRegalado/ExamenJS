import { TwjExamenRegaladoEvelynPage } from './app.po';

describe('twj-examen-regalado-evelyn App', () => {
  let page: TwjExamenRegaladoEvelynPage;

  beforeEach(() => {
    page = new TwjExamenRegaladoEvelynPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
