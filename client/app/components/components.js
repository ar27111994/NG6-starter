import angular from 'angular';
import Home from './home/home';
import appToolBar from './appToolBar/appToolBar';
import appSideBar from './appSideBar/appSideBar';

let componentModule = angular.module('app.components', [
  Home,
  appToolBar,
  appSideBar
])

.name;

export default componentModule;
