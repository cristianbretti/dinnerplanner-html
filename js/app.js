$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// Error view
	var errorListView = new ErrorListView($("#errorListContainer"), model);

	var homeView = new HomeView($("#homeView"));
	var homeController = new HomeController(homeView, model);

	var selectDishScreen = $("#selectDishScreen");

	// Left Panel
	var sidebarView = new SidebarView($("#sidebarContainer"), model);
	var sidebarController = new SidebarController(sidebarView, model);

	// Search result
	var dishSearchView = new DishSearchView($("#dishSearchContainer"), model);
	var dishSearchController = new DishSearchController(dishSearchView, model);

	// Dish detail
	var dishDetailsView = new DishDetailsView($("#dishDetailsContainer"), model);
	var dishDetailsController = new DishDetailsController(dishDetailsView, model);

	// Back and edit Panel
	var backAndEditView = new BackAndEditView($("#backAndEditContainer"), model);
	var backAndEditController = new BackAndEditController(backAndEditView, model);

	// Dinner overview
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewContainer"), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model);

	// Dinner printout
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutContainer"), model);
	
	// Default show
	hideAll = function() {
		homeView.hide();
		selectDishScreen.hide();

		sidebarView.hide();
		dishSearchView.hide();
		dishDetailsView.hide();

		backAndEditView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}

	showHomeScreen = function() {
		hideAll();
		homeView.show();
	}

	showDishSearchScreen = function() {
		hideAll();
		selectDishScreen.show();
		sidebarView.show();
		dishSearchView.show();
	}
	showDishDetailsScreen = function() {
		hideAll();
		selectDishScreen.show();
		sidebarView.show();
		dishDetailsView.show();
	}
	showDinnerOverviewScreen = function() {
		hideAll();
		backAndEditView.show();
		dinnerOverviewView.show();
	}
	showDinnerPrintoutScreen = function() {
		hideAll();
		backAndEditView.show();
		dinnerPrintoutView.show();
	}

	showHomeScreen();
});