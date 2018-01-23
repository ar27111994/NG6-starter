import AppSideBarModule from './appSideBar';
import AppSideBarController from './appSideBar.controller';
import AppSideBarComponent from './appSideBar.component';
import AppSideBarTemplate from './appSideBar.html';

describe('AppSideBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppSideBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppSideBarController();
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
      expect(AppSideBarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AppSideBarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AppSideBarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AppSideBarController);
    });
  });
});
