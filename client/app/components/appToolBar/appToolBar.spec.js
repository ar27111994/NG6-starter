import AppToolBarModule from './appToolBar';
import AppToolBarController from './appToolBar.controller';
import AppToolBarComponent from './appToolBar.component';
import AppToolBarTemplate from './appToolBar.html';

describe('AppToolBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppToolBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppToolBarController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AppToolBarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AppToolBarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AppToolBarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AppToolBarController);
    });
  });
});
