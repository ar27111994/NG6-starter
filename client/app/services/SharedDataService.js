function SharedDataService() {
    "ngInject";
    var data = "No Data";
    return { homeData: data, sidebarData: data };
}

export default SharedDataService;