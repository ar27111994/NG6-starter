class HomeController {
  constructor($scope, SharedDataService) {
    "ngInject";
    $scope.SharedData = SharedDataService;
    $scope.model = new go.GraphLinksModel(
      [
        { key: 1, name: "Alpha", color: "lightblue" },
        { key: 2, name: "Beta", color: "orange" },
        { key: 3, name: "Gamma", color: "lightgreen" },
        { key: 4, name: "Delta", color: "pink" }
      ],
      [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 2 },
        { from: 3, to: 4 },
        { from: 4, to: 1 }
      ]);

    $scope.model.selectedNodeData = null;
  }
}

export default HomeController;
