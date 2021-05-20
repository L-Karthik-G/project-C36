var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var feedDog;
var feed




//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  feedDog = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feed=createButton("Feed Dog");
  feed.position(1000,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  feedDog.display();


 
  
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  feedDog.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  var food_stock = foodObj.getFoodStock()

  if(food_stock_val <= 0){
    foodObj.updateFoodStock(food_stock_val *0 )
  }
  else{
    foodObj.updateFoodStock(food_stock_val -1 )
  }

  

}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
