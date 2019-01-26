/** DinnerOverviewController Object constructor
 * 
 * @param {Object} dinnerOverviewView - the dinnerOverviewView object
 * @param {Object} app - the general state controller
 */ 
var DinnerOverviewController = function (dinnerOverviewView, model, app) {
    dinnerOverviewView.printBtn.click(function() {
        app.showDinnerPrintoutScreen();
    });

    dinnerOverviewView.dishItems.map(function(dishItemView) {
        var dishItemController = new DishItemController(dishItemView, model, app);
    })
}
 
