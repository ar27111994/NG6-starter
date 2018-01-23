class AppToolBarController {
  constructor(SharedDataService, $mdDialog) {
    "ngInject";
    this.SharedData = SharedDataService;
    this.$mdDialog = $mdDialog;
  }
  confirm() {
    var confirm = this.$mdDialog.confirm()
    .title('Would you like to delete your debt?')
    .textContent('All of the banks have agreed to forgive you your debts.')
    .ariaLabel('Lucky day')
    .ok('Please do it!')
    .cancel('Sounds like a scam');

    this.$mdDialog.show(confirm).then(() => {
      status = 'You decided to get rid of your debt.';
      this.SharedData.homeData = status;
      }, () => {
      status = 'You decided to keep your debt.';
      this.SharedData.homeData = status;
    });
  }

  sidebarText() {
    this.SharedData.sidebarData = 'You clicked second button';
  }
}

export default AppToolBarController;
