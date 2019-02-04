$(function() {
	var generalController = new GeneralController();
	//We instantiate our model
	var model = new DinnerModel();

	// Error view
	var errorListView = new ErrorListView($("#errorListContainer"), model);

	var homeView = new HomeView($("#homeView"));
	generalController.addView(homeView);
	var homeController = new HomeController(homeView, model, generalController);

	var selectDishScreen = $("#selectDishScreen");
	generalController.addView(selectDishScreen);

	// Left Panel
	var sidebarView = new SidebarView($("#sidebarContainer"), model);
	generalController.addView(sidebarView);
	var sidebarController = new SidebarController(sidebarView, model, generalController);

	// Search result
	var dishSearchView = new DishSearchView($("#dishSearchContainer"), model, generalController);
	generalController.addView(dishSearchView);
	var dishSearchController = new DishSearchController(dishSearchView, model, generalController);

	// Dish detail
	var dishDetailsView = new DishDetailsView($("#dishDetailsContainer"), model);
	generalController.addView(dishDetailsView);
	var dishDetailsController = new DishDetailsController(dishDetailsView, model, generalController);

	// Back and edit Panel
	var backAndEditView = new BackAndEditView($("#backAndEditContainer"), model);
	generalController.addView(backAndEditView);
	var backAndEditController = new BackAndEditController(backAndEditView, model, generalController);

	// Dinner overview
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewContainer"), model);
	generalController.addView(dinnerOverviewView);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model, generalController);

	// Dinner printout
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutContainer"), model);
	generalController.addView(dinnerPrintoutView);

	generalController.addScreen('home', [homeView]);
	generalController.addScreen('search', [selectDishScreen, sidebarView, dishSearchView]);
	generalController.addScreen('details', [selectDishScreen, sidebarView, dishDetailsView]);
	generalController.addScreen('overview', [backAndEditView, dinnerOverviewView]);
	generalController.addScreen('printout', [backAndEditView, dinnerPrintoutView]);

	generalController.showScreen('home');
});