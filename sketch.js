var box,box2

function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,200,20,20,2,1);
  box2 = new Box(242,133,12,12,6,0.3)

}
function draw() 
{
  background(220);
  box.show();
  box.moveup();
  box2.show()
  box2.moveup()
}


