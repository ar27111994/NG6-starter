class HomeController {
  constructor($scope, SharedDataService) {
    "ngInject";
    $scope.SharedData = SharedDataService;
  }
}

export default HomeController;
