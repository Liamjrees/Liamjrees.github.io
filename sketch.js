let locationArray = ["Plymouth", "Paris", "New York", "Sydney", "Shanghai"];
let randomLocation;
let apiKey = "0ff85136e558017c0af2b07d7f79720a";
let weather;

function preload() {
  //For each position of the array, load a JSON object
  randomLocation = locationArray[round(random(locationArray.length-1))];
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+randomLocation+"&units=metric&appid="+apiKey;
  weather = loadJSON(url); //weather will not contain all cities' weather data

}

function setup() {
  var canvas = createCanvas(1280, 720);
  canvas.parent('sketchcontainer');
  noLoop();
  background(255, 255, 255);
  textAlign(CENTER)
  console.log(weather);
}

function draw() {

  // This section draws an arrow pointing in the direction of wind
  push();
  // Rotate by the wind's angle
  translate(width/2, height/2);
  angleMode(DEGREES);
  rotate(weather.wind.deg);

  stroke(255, 0, 0);
  strokeWeight(30);
  rect(0, -150, 0, 300);

  noStroke();
  fill(255, 0, 0);
  triangle(0, -180, -60, -100, 60, -100);

  pop();

  //360 text
  textSize(30);
  stroke(3)
  fill(0, 0, 0);
  text('NORTH', 640, 100);
  fill(255, 2, 0);

  //90
  textSize(30);
  stroke(3)
  fill(0, 0, 0);
  text('EAST', 950, 360);

  //180 text
  textSize(30);
  stroke(3)
  fill(0, 0, 0);
  text('SOUTH', 640, 650);
  fill(255, 2, 0);

  //270 text
  textSize(30);
  stroke(3)
  fill(0, 0, 0);
  text('WEST', 320, 360);
  fill(255, 2, 0);

  ellipseMode(CENTER);
  stroke(5);
  strokeWeight(5);
  noFill();
  ellipse(640, 360, 500, 500);

  textSize(40);
  textFont('Helvetica');
  strokeWeight(0);
  fill(0,0,0);
  text(weather.name, 640, 35);
  textSize(20)
  text("Wind Speed: " + weather.wind.speed + "mph", 470, 700);
  text("Wind Direction: " + weather.wind.deg + "°", 825, 700)
}
