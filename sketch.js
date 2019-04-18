var colors = { r:undefined, g: undefined, b: undefined }

var arm_1 = { x: 475, y: 275, u_d: 1 }; arm_2 = { x: 170, y: 275, u_d: 1 };
var eye_baller_1 = undefined; var eye_baller_2 = undefined;

function setup() {
  createCanvas(700, 700);
  eye_baller_1 = new Eye((700 / 2) - 35, (700 / 2) - 225, 45); eye_baller_2 = new Eye((700 / 2) + 35, (700 / 2) - 225, 45);
}

function draw() {

  noStroke();

 colors.r = random(0, 255); colors.g = random(0, 255); colors.b = random(0, 255);

  background(50, 50, 50);

  /* Ears */ fill(colors.r, colors.g, colors.b); quad(38 + 200, 31 + 80, 86 + 220, 20 + 100, 69 + 220, 63 + 100, 30 + 220, 76 + 100); quad(700 - 238, 31 + 80, (86 * 2) + 220, 20 + 100, 700 - (220 + 69), 63 + 100, 700 - 250, 76 + 100);
  /* Head */ fill(colors.r, colors.g, colors.b); ellipse(700 / 2, (700 / 2) - 200, 150, 150);
  /* Neck */ fill(colors.r, colors.g, colors.b); rect(375 - 62.5, 100, 75, 150);
  /* Eyes */ eye_baller_1.update(mouseX, mouseY); eye_baller_1.display(); eye_baller_2.update(mouseX, mouseY); eye_baller_2.display();
  /* Tummy v1 */ fill(colors.r, colors.g, colors.b); rect(300, 250, 100, 200);
  /* Tummy v2 */ fill(colors.r, colors.g, colors.b); ellipse(250, 295, 200, 100); ellipse(450, 295, 200, 100);
  /* Tummy v3 */ fill(colors.r, colors.g, colors.b); rect(250, 295, 200, 100);
  /* Arms */ fill(colors.r, colors.g, colors.b); rect(arm_1.x, arm_1.y, 45, 200); rect(arm_2.x, arm_2.y, 45, 200);
  /* Legs */ fill(colors.r, colors.g, colors.b); rect((700 / 2) - 75, (700 / 2) + 100, 50, 150); rect((width / 2) + 25, (height / 2) + 100, 50, 150);
}

function Eye(tx, ty, ts) {
  this.x = tx; this.y = ty; this.size = ts; this.angle = 0;

  this.update = function(mx, my) { this.angle = atan2(my - this.y, mx - this.x); }
  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(colors.r, colors.g, colors.b);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  }
}
