$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"));

	var homeView = new HomeView($("#homeView"));
	
	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);

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
	
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});