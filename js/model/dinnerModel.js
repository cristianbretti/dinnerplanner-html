//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var numberOfGuests = 5;
	var selectedDishes = [];
	var detailedDinner = 0;
	var observers = [];
	var errors = [];

	var types = ["all", "main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"];

	this.addObserver = function(observer) {
		observers.push(observer);
	}
	
	this.notifyObservers = function(id) {
		if(id === "ERROR-LIST"){
			var errorListView = observers.find(view => view.id === "ERROR-LIST");
			errorListView.view.update();
			return;
		}
		
		// TODO: performance boost by checking obj;
		observers.map(function(observer) {
			observer.view.update();
		});
	}

	this.getAllTypes = () => {
		return types;
	}

	this.setNumberOfGuests = function(num) {
		numberOfGuests = Math.max(num, 1);
		this.notifyObservers();
	}
	
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	this.getDetailedDinner = function() {
		return detailedDinner;
	}

	this.setDetailedDinner = function(id) {
		detailedDinner = id;
		this.notifyObservers();
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return selectedDishes.find(function(element) {
			return element.type === type;
		});
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return selectedDishes;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = 0;
		selectedDishes.map((dish) => {
			totalPrice += this.getDishPrice(dish);
		});
		return totalPrice;
	}

	//Returns the price of the dish times number of guests
	/**
	 * @param {Object} dish id of the disdh 
	 * @returns {Number} the price of the dish times number of guest
	 */
	this.getDishPrice = function(dish) {
		var price = 0;
		dish.extendedIngredients.map(ingredient => {
			price += Math.round(ingredient.amount*numberOfGuests);
		})
		return price;
	}	

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(dishToAdd) {
		var existingDishWithSameType = selectedDishes.find(function(dish) {
			var intersection =  dish.dishTypes.filter(x => dishToAdd.dishTypes.includes(x));
			if (intersection.length > 0) {
				return true;
			}
			return false;
		});

		if(existingDishWithSameType){
			this.removeDishFromMenu(existingDishWithSameType.id);
		}

		selectedDishes.push(dishToAdd);
		this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		selectedDishes = selectedDishes.filter(function(value, index, arr) {
			return value.id !== id;
		});
		this.notifyObservers();
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishesOld = function (type,filter) {
	  	return dishes.filter(function(dish) {
			var found = true;
			if(filter) {
				found = false;
				dish.ingredients.forEach(function(ingredient) {
					if(ingredient.name.indexOf(filter) !== -1) {
						found = true;
					}
				});
				if(dish.name.indexOf(filter) != -1)
				{
					found = true;
				}
			}
			if (type === 'all') {
				return found;
			}
			return dish.type === type && found;
	  	});	
	}

	this.buildSearchUrl = (type, filter) => {
		var params = new URLSearchParams();
		params.append('query', filter);
		if (type !== 'all') params.append('type', type);
		// params.append('instructionsRequired', true); // TODO: maybe include?
		params.append('number', 20);
		return 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?' + params.toString();
	}

	/**
	 * Convert bad requests into errors and throw. 
	 */
	this.handleErrors = (response) => {
		if (!response.ok) {
			throw response;
		}
		return response;
	}

	this.getAllDishes = (type, filter) => {
		return fetch(
				this.buildSearchUrl(type, filter),
				{headers: {'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
			.then(this.handleErrors)
			.then(response => response.json())
			.then(data => data.results)
			.catch(error => {
				this.addError(this.createError(error, "Could not execute search"));

			});
	}

	//function that returns a dish of specific ID
	this.getDish = (id) => {
		return fetch(
			'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + "/information",
			{headers: {'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
		.then(this.handleErrors)
		.then(response => response.json())
		.catch(error => {
			this.addError(this.createError(error, "Could not get recipe"));
		});
	}

	this.getErrors = () => {
		return errors;
	}

	this.addError = (error) => {
		errors.push(error);
		this.notifyObservers("ERROR-LIST");
	}

	this.removeError = (id) => {
		errors = errors.filter(error => error.id !== id);
		this.notifyObservers("ERROR-LIST");
	}

	this.createError = (error, details) => (
		{
			code: error.status,
			statusText: error.statusText,
			id: error.url,
			details,
		}
	)

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
