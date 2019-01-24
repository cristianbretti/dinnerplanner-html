/** HomeController Object constructor
 * 
 * @param {Object} homeView - the HomeView object
 * @param {Object} app - the general state controller
 */ 
var HomeController = function (homeView, model, app) {
    homeView.createNewDinnerBtn.click(function() {
        app.showDishSearchScreen();
    });
}