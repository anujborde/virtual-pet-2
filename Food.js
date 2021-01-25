class Food{
    constructor(){
        image=loadImage("Milk.png")
    }
    
display(){
    var x=80,y=100

imageMode(CENTER)
image(720,220,70,70)

if(this.foodstock!==0){
    for(var i=0;i<this.foodstock;i++){
        if(i%10==0){
            x=80,
            y=y+50
        }

    }
    image(this.image,x,y,50,50)
}

}

}