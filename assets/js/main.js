// Aplicación: Paisaje en Canvas 2D

const canvas = document.getElementById('bosqueCanvas');
const ctx = canvas.getContext('2d');

// --- PALETA DE COLORES ---
const COLORES = {
  cielo: '#80C4E9',
  pasto: '#71B354',
  sol: '#FFD700',
  nube: '#FFFFFF',
  rio: '#3498DB',
  tronco: '#8B5A2B',
  hojaVerde: '#55A630',
  hojaOscura: '#2D6A4F',
  hojaClara: '#AACC00',
  pino: '#2D6A4F',
  puente: '#A0522D',
  animalRelleno: '#FFFFFF',
  animalBorde: '#000000',
  ardillaRelleno: '#D2B48C',
  florRosa: '#E91E63',
  piedra: '#95A5A6',
  negro: '#000000'
};

// --- CIELO ---
function drawSky() {
  ctx.fillStyle = COLORES.cielo;
  ctx.fillRect(0, 0, 600, 400);
}

// --- MONTAÑAS ---
function drawMountains() {
  ctx.fillStyle = '#6B8E9E';
  ctx.beginPath();
  ctx.moveTo(0, 280);
  ctx.lineTo(120, 180);
  ctx.lineTo(220, 210);
  ctx.lineTo(300, 160);
  ctx.lineTo(400, 190);
  ctx.lineTo(500, 150);
  ctx.lineTo(600, 170);
  ctx.lineTo(600, 280);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = COLORES.negro;
  ctx.stroke();
}

// --- SUELO/PASTO ---
function drawGround() {
  ctx.fillStyle = COLORES.pasto;
  ctx.beginPath();
  ctx.moveTo(0, 320);
  ctx.quadraticCurveTo(300, 350, 600, 330);
  ctx.lineTo(600, 600);
  ctx.lineTo(0, 600);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = COLORES.negro;
  ctx.stroke();
}

// --- SOL ---
function drawSun() {
  ctx.fillStyle = COLORES.sol;
  ctx.beginPath();
  ctx.arc(80, 70, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = COLORES.negro;
  ctx.stroke();
}

// --- NUBES ---
function drawCloud(x, y) {
  ctx.fillStyle = COLORES.nube;
  ctx.strokeStyle = COLORES.negro;
  
  ctx.beginPath();
  ctx.arc(x, y, 18, 0, Math.PI * 2);
  ctx.arc(x + 22, y - 4, 16, 0, Math.PI * 2);
  ctx.arc(x - 15, y + 3, 15, 0, Math.PI * 2);
  ctx.arc(x + 8, y + 8, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

// --- ÁRBOL REDONDO ---
function drawTreeRound(x, y) {
  ctx.fillStyle = COLORES.tronco;
  ctx.fillRect(x, y, 14, 50);
  ctx.strokeStyle = COLORES.negro;
  ctx.strokeRect(x, y, 14, 50);
  
  ctx.fillStyle = COLORES.hojaVerde;
  ctx.beginPath();
  ctx.arc(x + 7, y - 20, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaOscura;
  ctx.beginPath();
  ctx.arc(x - 6, y - 28, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaClara;
  ctx.beginPath();
  ctx.arc(x + 20, y - 28, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaVerde;
  ctx.beginPath();
  ctx.arc(x + 7, y - 40, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

// --- PINO ---
function drawTreePine(x, y) {
  ctx.fillStyle = COLORES.tronco;
  ctx.fillRect(x + 12, y, 10, 35);
  ctx.strokeStyle = COLORES.negro;
  ctx.strokeRect(x + 12, y, 10, 35);
  
  ctx.fillStyle = COLORES.pino;
  
  ctx.beginPath();
  ctx.moveTo(x, y - 15);
  ctx.lineTo(x + 34, y - 15);
  ctx.lineTo(x + 17, y - 55);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaOscura;
  ctx.beginPath();
  ctx.moveTo(x + 4, y - 45);
  ctx.lineTo(x + 30, y - 45);
  ctx.lineTo(x + 17, y - 80);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.pino;
  ctx.beginPath();
  ctx.moveTo(x + 7, y - 70);
  ctx.lineTo(x + 27, y - 70);
  ctx.lineTo(x + 17, y - 100);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaOscura;
  ctx.beginPath();
  ctx.moveTo(x + 10, y - 90);
  ctx.lineTo(x + 24, y - 90);
  ctx.lineTo(x + 17, y - 112);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// --- RÍO ---
function drawRiver() {
  ctx.fillStyle = COLORES.rio;
  ctx.strokeStyle = COLORES.negro;
  
  ctx.beginPath();
  ctx.moveTo(0, 400);
  ctx.bezierCurveTo(150, 380, 300, 420, 450, 410);
  ctx.bezierCurveTo(520, 400, 570, 420, 600, 415);
  ctx.lineTo(600, 450);
  ctx.bezierCurveTo(570, 460, 520, 440, 450, 450);
  ctx.bezierCurveTo(300, 460, 150, 420, 0, 440);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// --- PUENTE ---
function drawBridge() {
  ctx.fillStyle = COLORES.puente;
  ctx.strokeStyle = COLORES.negro;
  
  ctx.beginPath();
  ctx.moveTo(200, 390);
  ctx.quadraticCurveTo(300, 360, 400, 390);
  ctx.lineTo(400, 420);
  ctx.quadraticCurveTo(300, 390, 200, 420);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.puente;
  for (let i = 0; i < 5; i++) {
    let x = 220 + i * 40;
    ctx.fillRect(x - 3, 380, 30, 8);
    ctx.strokeRect(x - 3, 380, 30, 8);
  }
}

// --- CONEJO ---
function drawRabbit(x, y) {
  ctx.fillStyle = COLORES.animalRelleno;
  ctx.strokeStyle = COLORES.animalBorde;
  
  ctx.beginPath();
  ctx.ellipse(x, y, 12, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.ellipse(x + 8, y - 8, 6, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillRect(x + 4, y - 20, 2, 10);
  ctx.fillRect(x + 10, y - 20, 2, 10);
  ctx.strokeRect(x + 4, y - 20, 2, 10);
  ctx.strokeRect(x + 10, y - 20, 2, 10);
  
  ctx.fillStyle = COLORES.animalBorde;
  ctx.beginPath();
  ctx.arc(x + 9, y - 10, 1.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + 14, y - 10, 1.2, 0, Math.PI * 2);
  ctx.fill();
}

// --- ARDILLA ---
function drawSquirrel(x, y) {
  ctx.fillStyle = COLORES.ardillaRelleno;
  ctx.strokeStyle = COLORES.animalBorde;
  
  ctx.beginPath();
  ctx.ellipse(x, y, 10, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(x + 8, y - 7, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.ellipse(x - 6, y - 4, 8, 5, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.animalBorde;
  ctx.beginPath();
  ctx.arc(x + 9, y - 9, 1, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + 14, y - 9, 1, 0, Math.PI * 2);
  ctx.fill();
}

// --- FLOR ---
function drawFlower(x, y) {
  for (let i = 0; i < 5; i++) {
    let angle = (i * 72) * Math.PI / 180;
    let px = x + Math.cos(angle) * 5;
    let py = y + Math.sin(angle) * 5;
    ctx.fillStyle = COLORES.florRosa;
    ctx.strokeStyle = COLORES.animalBorde;
    ctx.beginPath();
    ctx.arc(px, py, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  
  ctx.fillStyle = COLORES.sol;
  ctx.beginPath();
  ctx.arc(x, y, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

// --- PIEDRAS ---
function drawStones() {
  ctx.fillStyle = COLORES.piedra;
  ctx.strokeStyle = COLORES.animalBorde;
  
  for (let i = 0; i < 5; i++) {
    let x = 360 + i * 30;
    ctx.beginPath();
    ctx.ellipse(x, 520, 3, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

// --- ESCENA PRINCIPAL ---
function drawScene() {
  drawSky();
  drawMountains();
  drawGround();
  
  drawSun();
  drawCloud(180, 80);
  drawCloud(400, 70);
  drawCloud(520, 100);
  
  drawRiver();
  drawBridge();
  
  drawTreeRound(70, 340);
  drawTreeRound(150, 350);
  drawTreePine(260, 370);
  drawTreeRound(330, 350);
  drawTreePine(410, 380);
  drawTreeRound(480, 360);
  drawTreePine(540, 380);
  
  drawRabbit(140, 480);
  drawRabbit(430, 500);
  drawSquirrel(330, 430);
  
  drawFlower(270, 490);
  drawFlower(290, 500);
  drawFlower(310, 485);
  drawFlower(250, 480);
  drawFlower(350, 495);
  
  drawStones();
}

drawScene();