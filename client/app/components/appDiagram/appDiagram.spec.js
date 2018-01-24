import AppDiagramModule from './appDiagram';
import AppDiagramController from './appDiagram.controller';
import AppDiagramComponent from './appDiagram.component';
import AppDiagramTemplate from './appDiagram.html';

describe('AppDiagram', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppDiagramModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppDiagramController();
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
      expect(AppDiagramTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AppDiagramComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AppDiagramTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AppDiagramController);
    });
  });
});
