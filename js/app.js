$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	// var exampleView = new ExampleView($("#exampleView"));

	var homeView = new HomeView($("#homeView"));
	var homeController = new HomeController(homeView, this);

	// Left Panel
	var sidebarView = new SidebarView($("#sidebarContainer"), model);
	var sidebarController = new SidebarController(sidebarView, this);

	// Search result
	var dishSearchView = new DishSearchView($("#dishSearchContainer"), model);
	var dishSearchController = new DishSearchController(dishSearchView, this);

	// Dish detail
	var dishDetailsView = new DishDetailsView($("#dishDetailsContainer"), model);
	var dishDetailsController = new DishDetailsController(dishDetailsView, this);

	// Back and edit Panel
	var backAndEditView = new BackAndEditView($("#backAndEditContainer"), model);
	var backAndEditController = new BackAndEditController(backAndEditView, this);

	// Dinner overview
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewContainer"), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, this);

	// Dinner printout
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutContainer"), model);
	
	// Default show
	this.hideAll = function() {
		$("#homeView").hide();
		$("#selectDishScreen").hide();

		$("#sidebarContainer").hide();
		$("#dishSearchContainer").hide();
		$("#dishDetailsContainer").hide();

		$("#backAndEditContainer").hide();
		$('#dinnerOverviewContainer').hide();
		$("#dinnerPrintoutContainer").hide();
	}

	this.showHomeScreen = function() {
		this.hideAll();
		$("#homeView").show();
	}

	this.showDishSearchScreen = function() {
		this.hideAll();
		$("#selectDishScreen").show();
		$("#sidebarContainer").show();
		$("#dishSearchContainer").show();
	}
	this.showDishDetailsScreen = function(dishId) {
		model.setDetailedDinner(dishId);
		this.hideAll();
		$("#selectDishScreen").show();
		$("#sidebarContainer").show();
		$("#dishDetailsContainer").show();
	}
	this.showDinnerOverviewScreen = function() {
		this.hideAll();
		$("#backAndEditContainer").show();
		$('#dinnerOverviewContainer').show();
	}
	this.showDinnerPrintoutScreen = function() {
		this.hideAll();
		$("#backAndEditContainer").show();
		$('#dinnerPrintoutContainer').show();
	}

	this.showHomeScreen(); // done
	// this.showDishSearchScreen(); // done
	// this.showDishDetailsScreen(); // done
	// this.showDinnerOverviewScreen(); // done
	// this.showDinnerPrintoutScreen(); // done
});