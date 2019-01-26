 /** SidebarItemView Object constructor
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} dish - one dish.
 */ 
var SidebarItemView = function (container, dish, price) {
    this.oneSelectedDishContainer = $('<div/>').attr({
        'class': 'flex justify-between bg-orange m-1 p-1 border border-black',
    });

    this.nameOfDish = $('<div/>').attr('class', "flex-1").html(dish.name);
    this.priceOfDish = $('<div/>').attr('class', "").html(price);
    this.deleteDishBtn = $('<button/>')
        .attr('id', "deleteDishBtn")
        .attr('class', "w-5 bg-red text-white rounded hover:bg-white hover:text-red")
        .html("X");
    var buttonWrapper = $('<div/>')
        .attr('class', 'w-10 flex justify-end')
        .html(this.deleteDishBtn);

    this.oneSelectedDishContainer.append(this.nameOfDish, this.priceOfDish, buttonWrapper);
    container.append(this.oneSelectedDishContainer);

    this.dishId = dish.id;
}