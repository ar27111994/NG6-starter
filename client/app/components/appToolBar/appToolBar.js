import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appToolBarComponent from './appToolBar.component';

let appToolBarModule = angular.module('appToolBar', [
  uiRouter
])

.component('appToolBar', appToolBarComponent)

.name;

export default appToolBarModule;
