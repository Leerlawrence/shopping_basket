var shoppingBasket = {
  basket:0,
  basketItems: [],
  value:0.00,
  // fill: function 100
  addToBasket: function() {
    this.basket +=10
  },

  addMilkToBasket: function() {
    this.emptyBasket();
    this.basket +=1;
    this.basketItems.push("Milk");
    this.value += 1;
  },

  addBreadToBasket: function() {
    this.basket +=1;
    this.basketItems.push("Bread");
    this.value += 1.50

  },

  fillUp: function() {
    this.basket="Full"
  },

  emptyBasket: function() {
    this.basket =0;
    this.value=0;
    this.basketItems=[] 
  }, 

  getDiscount: function() {
    if (this.value >= 20) {
    this.value = this.value - (this.value/10);}
    else
      this.value
   // this.basketItems=[] 
  },

buyOneGetOneFree: function(){}



};
//console.log(this.value)

module.exports = shoppingBasket;