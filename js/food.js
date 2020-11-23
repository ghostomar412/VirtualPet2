class Food{
constructor(){
this.foodStock=0
this.lastFed
this.image=loadImage('images/Milk.png')
}
display(){
    var x=10
    var y=50
if(foodStock=>1){
for(var i=0; i < this.foodStock;i++){
    if (i%10==0){
    x=40;
    y=y+50
    }
    image(this.image,x,y,50,50)
    x=x+50
}
}


}
getFoodStock(){
    var foodStockRef=database.ref('food');
    foodStockRef.on("value",(data)=>{
this.foodStock=data.val();

    })

}

}