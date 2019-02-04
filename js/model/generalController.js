var GeneralController = function() {
    var views = [];
    var screens = {};

    this.hideAll = () => {
        views.map(view => view.hide());
    }

    this.addView = (view) => {
        views.push(view);
    }

    this.addScreen = (name, viewsToShow) => {
        screens[name] = viewsToShow;
    }

    this.showScreen = (name) => {
        this.hideAll();
        screens[name].map(view => view.show());
    }
}