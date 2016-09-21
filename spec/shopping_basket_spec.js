var assert = require('assert');
var shoppingBasket = require('../shopping_basket');

describe('Shopping basket', function(){
  it("This should be empty", function(){
    assert.equal(0, shoppingBasket.basket)
  })

  it("should go to full when filled", function(){
  shoppingBasket.fillUp();
  assert.equal("Full", shoppingBasket.basket)
   })

  it("should add milk to basket", function(){
  shoppingBasket.addMilkToBasket();
  assert.equal("Milk", shoppingBasket.basketItems);
  assert.deepEqual(["Milk"], shoppingBasket.basketItems);
  
  //assert.equal(1, shoppingBasket.value)
   })

  it("should add bread to basket", function(){
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  shoppingBasket.addBreadToBasket();
  //assert.equal("Bread", shoppingBasket.basketItems);
  //assert.deepEqual(["Milk","Bread"], shoppingBasket.basketItems);
  assert.equal(20.5, shoppingBasket.value)
   })

  it("should take 10% off", function(){
  shoppingBasket.getDiscount();
  //assert.equal("Bread", shoppingBasket.basketItems);
  assert.equal(18.45, shoppingBasket.value)
   })



  // it("should get basket value", function(){
  // //shoppingBasket.addMilkToBasket();
  // assert.equal(1, shoppingBasket.value)
  //  })
  
}) //closes describe




// it("should go to 10 when drank", function(){
// basket.fill();
// basket.drink();
// assert.equal(90, basket.volume)
// })

// it("should go to 0 when emptied", function(){
// basket.emptyBottle();
// assert.equal(0, basket.volume)
// })


  //})


  // water bottle should be empty(X)
  // 2. should go to 100 when filled
  // 3. should go down by 10 when drank
  // 4. should go to 0 when emptied
  // 5. should not be able to go below 0