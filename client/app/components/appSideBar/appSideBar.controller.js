class AppSideBarController {
  constructor($scope, SharedDataService) {
    "ngInject";
    this.SharedData = SharedDataService;
    $scope.SharedData = SharedDataService;
    $scope.SharedData.diagram = SharedDataService.diagram
  }

  homeText() {
    this.SharedData.homeData = this.SharedData.sidebarData;
  }
}

export default AppSideBarController;
