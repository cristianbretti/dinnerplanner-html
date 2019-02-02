$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	// var exampleView = new ExampleView($("#exampleView"));

	var errorListView = new ErrorListView($("#errorList"), model);

	var homeView = new HomeView($("#homeView"));
	var homeController = new HomeController(homeView, model);

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
		$("#homeView").hide();
		$("#selectDishScreen").hide();

		$("#sidebarContainer").hide();
		$("#dishSearchContainer").hide();
		$("#dishDetailsContainer").hide();

		$("#backAndEditContainer").hide();
		$('#dinnerOverviewContainer').hide();
		$("#dinnerPrintoutContainer").hide();
	}

	showHomeScreen = function() {
		hideAll();
		$("#homeView").show();
	}

	showDishSearchScreen = function() {
		hideAll();
		$("#selectDishScreen").show();
		$("#sidebarContainer").show();
		$("#dishSearchContainer").show();
	}
	showDishDetailsScreen = function() {
		hideAll();
		$("#selectDishScreen").show();
		$("#sidebarContainer").show();
		$("#dishDetailsContainer").show();
	}
	showDinnerOverviewScreen = function() {
		hideAll();
		$("#backAndEditContainer").show();
		$('#dinnerOverviewContainer').show();
	}
	showDinnerPrintoutScreen = function() {
		hideAll();
		$("#backAndEditContainer").show();
		$('#dinnerPrintoutContainer').show();
	}

	showHomeScreen(); // done
	// showDishSearchScreen(); // done
	// showDishDetailsScreen(); // done
	// showDinnerOverviewScreen(); // done
	// showDinnerPrintoutScreen(); // done
});