$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	// var exampleView = new ExampleView($("#exampleView"));

	var homeView = new HomeView($("#homeView"));

	// Left Panel
	var sidebarView = new SidebarView($("#sidebarContainer"), model);

	// Search result
	var dishSearchView = new DishSearchView($("#dishSearchContainer"), model);

	// Dish detail
	var dishDetailsView = new DishDetailsView($("#dishDetailsContainer"), model);

	// Back and edit Panel
	var backAndEditView = new BackAndEditView($("#backAndEditContainer"), model);

	// Dinner overview
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewContainer"), model);

	// Dinner printout
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutContainer"), model);
	
	// Default show
	this.hideAll = function() {
		$("#homeView").hide();

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
		$("#sidebarContainer").show();
		$("#dishSearchContainer").show();
	}
	this.showDishDetailScreen = function() {
		this.hideAll();
		$("#sidebarContainer").show();
		$("#dishDetailContainer").show();
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

	// this.showHomeScreen(); // done
	this.showDishSearchScreen();
	// this.showDishDetailScreen();
	// this.showDinnerOverviewScreen();
	// this.showDinnerPrintoutScreen();
});