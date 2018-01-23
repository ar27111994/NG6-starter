import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appSideBarComponent from './appSideBar.component';

let appSideBarModule = angular.module('appSideBar', [
  uiRouter
])

.component('appSideBar', appSideBarComponent)

.name;

export default appSideBarModule;
