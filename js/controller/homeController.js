/** HomeController Object constructor
 * 
 * @param {Object} homeView - the HomeView object
 * @param {Object} model - the reference to the Dinner Model.
 */ 
var HomeController = function (homeView, model) {
    homeView.createNewDinnerBtn.click(function() {
        showDishSearchScreen();
    });
}