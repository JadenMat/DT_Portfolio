let video;
var listOfColors = ["#1c77c3", "#39a9db", "#40bcd8", "#f39237", "#d63230", "#540d6e", "#ee4266", "#ffd23f","#f3fcf0", "#19647E"];

let fr = 60;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  canvas.parent('sketch')

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  grid = new CircleGrid();
}

function draw() {
  background(0, 50);

  grid.display();
}

class CircleClass {
  constructor(px, py, s) {
    this.positionX = px;
    this.positionY = py;
    this.size = s;
    this.c = listOfColors[int(random(0, listOfColors.length))];
  }

  display() {
    circle(this.positionX, this.positionY, this.size);
    
    if (this.size > 15) {
      noStroke();
      fill(this.c);
    } else {
      noFill();
      strokeWeight(5);
      stroke(this.c);
    }
  }
}

class CircleGrid {
  constructor() {
    this.gridSize = 30;
    this.circles = [];

    for (let y = 0; y < video.height; y += this.gridSize) {
      let row = [];
      for (let x = 0; x < video.width; x += this.gridSize) {
        let index = (y * video.width + x) * 4;
        let r = video.pixels[index];
        
        let dia = map(r, 0, 255, this.gridSize, 2);
        
        row.push(
          new CircleClass(x + this.gridSize / 2, y + this.gridSize / 2, dia)
        );
      }
      this.circles.push(row);
    }
  }

  display() {
    video.loadPixels();
    for (let i = 0; i < this.circles.length; i++) {
      for (let j = 0; j < this.circles[0].length; j++) {
        let index = (i * this.gridSize * video.width + j * this.gridSize) * 4;
        let r = video.pixels[index];
        
        let dia = map(r, 0, 255, this.gridSize, 2);
        this.circles[i][j].size = dia;
        this.circles[i][j].display();
      }
    }

    var selection1 = int(random(this.circles.length - 1));
    var selection2 = int(random(this.circles[0].length - 1));
    var col = listOfColors[int(random(0, listOfColors.length))];
    this.circles[selection1][selection2].c = col;
  }
}
