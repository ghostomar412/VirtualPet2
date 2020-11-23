var dogs,happyDog
var foodS
var database
var butt1,butt2;

var fedTime,lastFed;
var FoodOBJ

function preload()
{
  dog= loadImage ("images/dogImg.png")
  happyDog= loadImage ("images/dogImg1.png")
    Milk= loadImage ("images/Milk.png")
    
    
}

function setup() {
	createCanvas(500,500);
  database=firebase.database();
  dogs=createSprite(400,350)
  dogs.addImage(dog)
  dogs.scale=0.3
 FoodOBJ=new Food()

 butt1=createButton("Feed the Ollie")
 butt1.position(600,95);
 butt1.mousePressed(feedDog);

 butt2=createButton("Add Food");
 butt2.position(700,95);
 butt2.mousePressed(addFoods);
  FoodOBJ.getFoodStock()
  foodS=FoodOBJ.foodStock
}


function draw() {  
background(rgb(0,255,100))
fill(255,255,254)
fedTime=database.ref('lastFed');
fedTime.on("value",function(data){
  lastFed=data.val();
})
textSize(15);
if(lastFed>=12){
  text("Last Feed :" +lastFed%12 +"PM", 350,30)
}else if (lastFed==0){
text("Last Feed : 12 AM",350,30)
}else{
  text("Last Feed : "+lastFed + "AM",350,30)
}
var t=hour();
console.log(t)
  FoodOBJ.display();
  drawSprites();
  
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else {
    x=x-1;
  }
database.ref('/').update({
  food:x
})


}
function addFoods(){
foodS++;
database.ref('/').update({
  food:foodS
})


}

function feedDog(){
  /*if(foodS<=0){
    foodS=0;
  }
  else {
    foodS=foodS-1;
    fedTime=hour();
    console.log(fedTime);
  }*/
  fedTime=hour();
    console.log(fedTime);
foodS=foodS-1;
  database.ref('/').update({
    food:foodS,
    lastFed:fedTime
  })
  if(foodS>0){
dogs.addImage(happyDog)
  }
}