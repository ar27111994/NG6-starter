function SharedDataService() {
    "ngInject";
    var data = "No Data";
    return { homeData: data, sidebarData: data, diagram: null };
}

export default SharedDataService;