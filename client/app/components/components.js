import angular from 'angular';
import Home from './home/home';
import appToolBar from './appToolBar/appToolBar';
import appSideBar from './appSideBar/appSideBar';
import appDiagram from './appDiagram/appDiagram';

let componentModule = angular.module('app.components', [
  Home,
  appToolBar,
  appSideBar,
  appDiagram
])

.name;

export default componentModule;
