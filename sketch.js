//Create variables here
var dog,di
var happy ,happyi
var foodS

var database
var Stock="20"
var stock

var feed,add
//var milk

function preload()
{

di=loadImage("dogImg.png")
happyi=loadImage("dogImg1.png")
//milk=loadImage("Milk.png")

	//load images here
}

function setup() {
	createCanvas(800, 400);
  database=firebase.database();

feed=createButton("Feed Drago")
feed.position(700,100)

add=createButton("Add Food")
add.position(600,100)

 var foodstock=database.ref('Food');
  foodstock.on("value",readStock)
  

dog=createSprite(700,200,10,10)
dog.addImage(di)
dog.scale=0.2


}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
 
 

}

function addfood(){
  foodstock+=1
  database.ref('/').update
}

function feeddog(){
foodstock-=1
dog.addImage("dogImg1.png")
}

function readStock(data){
foodS=data.val();
//foodstock='Food'/"value"
}

function writeStock(x){
if(x<=0){
  x=0
}
else{x=x-1}  
database.ref('/').update({
Food:x

  })
}




