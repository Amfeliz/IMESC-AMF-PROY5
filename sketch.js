let mangos = [];  // Array para almacenar los mangos

function setup() {
  createCanvas(600, 400);  // Tamaño del lienzo
  noStroke();
  background(255, 182, 193);  // Fondo rosa
  
  // Crea mangos iniciales
  for (let i = 0; i < 10; i++) {
    let mango = {
      x: random(width),
      y: random(height),
      size: random(20, 40),  // Tamaño del mango
      speedX: random(-2, 2),  // Velocidad horizontal
      speedY: random(-2, 2)   // Velocidad vertical
    };
    mangos.push(mango);
  }
}

function draw() {
  background(255, 182, 193);  // Fondo rosa
  
  // Mueve y muestra los mangos
  for (let mango of mangos) {
    mango.x += mango.speedX;
    mango.y += mango.speedY;
    
    // Detectar colisiones con los bordes del lienzo
    if (mango.x < 0 || mango.x > width) {
      mango.speedX *= -1;  // Invierte la dirección en X
    }
    
    if (mango.y < 0 || mango.y > height) {
      mango.speedY *= -1;  // Invierte la dirección en Y
    }
    
    // Dibuja el mango como una elipse naranja
    fill(255, 165, 0);  // Naranja
    ellipse(mango.x, mango.y, mango.size, mango.size);
    
    // Dibuja la parte superior verde del mango
    fill(0, 128, 0);  // Verde oscuro
    let topSize = mango.size * 0.3;  // Tamaño de la parte superior
    ellipse(mango.x, mango.y - mango.size / 2, topSize, topSize);
  }
}

// Agregar más mangos cuando se presiona el mouse
function mousePressed() {
  let mango = {
    x: mouseX,
    y: mouseY,
    size: random(20, 40),
    speedX: random(-2, 2),
    speedY: random(-2, 2)
  };
  mangos.push(mango);
}
