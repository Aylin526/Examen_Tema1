// Aplicación: Paisaje en Canvas 2D - Versión más parecida a la original

const canvas = document.getElementById('bosqueCanvas');
const ctx = canvas.getContext('2d');

// --- PALETA DE COLORES ---
const COLORES = {
  cielo: '#B7E1FA',
  pasto: '#8FC98F',
  pastoOscuro: '#6DA56D',
  sol: '#FFE55C',
  nube: '#FFFFFF',
  rio: '#7FC0E8',
  rioOscuro: '#5A9FD4',
  tronco: '#B28B5E',
  troncoOscuro: '#8B5A2B',
  hojaVerde: '#7FB27F',
  hojaOscura: '#4F8A4F',
  hojaClara: '#A5D6A5',
  pino: '#2D6A4F',
  puente: '#C19A6B',
  puenteTablones: '#A0522D',
  animalRelleno: '#F8F8F8',
  animalBorde: '#2C2C2C',
  ardillaRelleno: '#D2B48C',
  florRosa: '#F9ACB5',
  florCentro: '#FFE55C',
  piedra: '#B0B0B0',
  negro: '#2C2C2C'
};

// --- CIELO CON DEGRADADO ---
function drawSky() {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, '#9AC9F0');
  gradient.addColorStop(1, '#D4E8FA');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 600, 300);
}

// --- MONTAÑAS DEL FONDO ---
function drawBackgroundMountains() {
  // Montañas más lejanas (tono más claro)
  ctx.fillStyle = '#C0D4E8';
  ctx.beginPath();
  ctx.moveTo(0, 220);
  ctx.lineTo(80, 160);
  ctx.lineTo(170, 190);
  ctx.lineTo(250, 140);
  ctx.lineTo(350, 170);
  ctx.lineTo(450, 130);
  ctx.lineTo(550, 150);
  ctx.lineTo(600, 120);
  ctx.lineTo(600, 220);
  ctx.closePath();
  ctx.fill();
  
  // Segunda capa de montañas (tono medio)
  ctx.fillStyle = '#A0B8D0';
  ctx.beginPath();
  ctx.moveTo(0, 250);
  ctx.lineTo(100, 190);
  ctx.lineTo(200, 220);
  ctx.lineTo(300, 170);
  ctx.lineTo(400, 200);
  ctx.lineTo(500, 160);
  ctx.lineTo(600, 180);
  ctx.lineTo(600, 250);
  ctx.closePath();
  ctx.fill();
}

// --- SUELO/PASTO CON TEXTURA ---
function drawGround() {
  // Base del pasto
  ctx.fillStyle = COLORES.pasto;
  ctx.beginPath();
  ctx.moveTo(0, 250);
  ctx.lineTo(600, 230);
  ctx.lineTo(600, 600);
  ctx.lineTo(0, 600);
  ctx.closePath();
  ctx.fill();
  
  // Textura de pasto (manchas más oscuras)
  ctx.fillStyle = COLORES.pastoOscuro;
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.arc(50 + i * 20, 270 + (i % 5) * 20, 15, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// --- SOL CON RAYOS ---
function drawSun() {
  // Rayos del sol
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    let angle = i * Math.PI / 4;
    let x1 = 90 + Math.cos(angle) * 30;
    let y1 = 70 + Math.sin(angle) * 30;
    let x2 = 90 + Math.cos(angle) * 45;
    let y2 = 70 + Math.sin(angle) * 45;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  
  // Círculo del sol
  ctx.fillStyle = COLORES.sol;
  ctx.beginPath();
  ctx.arc(90, 70, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = COLORES.negro;
  ctx.stroke();
}

// --- NUBES ESPONJOSAS ---
function drawCloud(x, y) {
  ctx.fillStyle = COLORES.nube;
  ctx.strokeStyle = COLORES.negro;
  
  ctx.beginPath();
  ctx.arc(x, y, 22, 0, Math.PI * 2);
  ctx.arc(x + 28, y - 5, 20, 0, Math.PI * 2);
  ctx.arc(x - 18, y + 3, 18, 0, Math.PI * 2);
  ctx.arc(x + 10, y + 8, 16, 0, Math.PI * 2);
  ctx.arc(x + 40, y + 2, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

// --- ÁRBOL REDONDO (como en la original) ---
function drawTreeRound(x, y, tamaño = 1) {
  // Tronco
  ctx.fillStyle = COLORES.tronco;
  ctx.fillRect(x, y, 16 * tamaño, 55 * tamaño);
  ctx.strokeStyle = COLORES.negro;
  ctx.strokeRect(x, y, 16 * tamaño, 55 * tamaño);
  
  // Copa - varios círculos verdes
  ctx.fillStyle = COLORES.hojaVerde;
  ctx.beginPath();
  ctx.arc(x + 8 * tamaño, y - 18 * tamaño, 24 * tamaño, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaOscura;
  ctx.beginPath();
  ctx.arc(x - 6 * tamaño, y - 25 * tamaño, 18 * tamaño, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaClara;
  ctx.beginPath();
  ctx.arc(x + 22 * tamaño, y - 25 * tamaño, 18 * tamaño, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = COLORES.hojaVerde;
  ctx.beginPath();
  ctx.arc(x + 8 * tamaño, y - 38 * tamaño, 16 * tamaño, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

// --- PINO DE 3 TRIÁNGULOS ---
function drawTreePine3(x, y) {
  // Tronco
  ctx.fillStyle = COLORES.troncoOscuro;
  ctx.fillRect(x + 10, y, 12, 40);
  ctx.strokeStyle = COLORES.negro;
  ctx.strokeRect(x + 10, y, 12, 40);
  
  // Triángulos (3 niveles)
  ctx.fillStyle = COLORES.pino;
  
  // Triángulo inferior
  ctx.beginPath();
  ctx.moveTo(x, y - 15);
  ctx.lineTo(x + 32, y - 15);
  ctx.lineTo(x + 16, y - 55);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Triángulo medio
  ctx.fillStyle = COLORES.hojaOscura;
  ctx.beginPath();
  ctx.moveTo(x + 3, y - 45);
  ctx.lineTo(x + 29, y - 45);
  ctx.lineTo(x + 16, y - 80);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Triángulo superior
  ctx.fillStyle = COLORES.pino;
  ctx.beginPath();
  ctx.moveTo(x + 6, y - 70);
  ctx.lineTo(x + 26, y - 70);
  ctx.lineTo(x + 16, y - 100);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// --- PINO DE 4 TRIÁNGULOS ---
function drawTreePine4(x, y) {
  // Tronco
  ctx.fillStyle = COLORES.troncoOscuro;
  ctx.fillRect(x + 12, y, 12, 45);
  ctx.strokeStyle = COLORES.negro;
  ctx.strokeRect(x + 12, y, 12, 45);
  
  // 4 triángulos
  ctx.fillStyle = COLORES.pino;
  
  // 1er triángulo (inferior)
  ctx.beginPath();
  ctx.moveTo(x, y - 10);
  ctx.lineTo(x + 36, y - 10);
  ctx.lineTo(x + 18, y - 50);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // 2do triángulo
  ctx.fillStyle = COLORES.hojaOscura;
  ctx.beginPath();
  ctx.moveTo(x + 4, y - 40);
  ctx.lineTo(x + 32, y - 40);
  ctx.lineTo(x + 18, y - 75);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // 3er triángulo
  ctx.fillStyle = COLORES.pino;
  ctx.beginPath();
  ctx.moveTo(x + 7, y - 65);
  ctx.lineTo(x + 29, y - 65);
  ctx.lineTo(x + 18, y - 95);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // 4to triángulo (superior)
  ctx.fillStyle = COLORES.hojaOscura;
  ctx.beginPath();
  ctx.moveTo(x + 10, y - 85);
  ctx.lineTo(x + 26, y - 85);
  ctx.lineTo(x + 18, y - 110);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// --- RÍO ---
function drawRiver() {
  ctx.fillStyle = COLORES.rio;
  ctx.strokeStyle = COLORES.negro;
  
  ctx.beginPath();
  ctx.moveTo(0, 320);
  ctx.bezierCurveTo(150, 300, 250, 340, 400, 330);
  ctx.bezierCurveTo(500, 320, 550, 340, 600, 335);
  ctx.lineTo(600, 380);
  ctx.bezierCurveTo(550, 385, 500, 365, 400, 375);
  ctx.bezierCurveTo(250, 385, 150, 345, 0, 365);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Ondas del río
  ctx.strokeStyle = COLORES.rioOscuro;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(100, 340);
  ctx.bezierCurveTo(200, 330, 300, 360, 400, 350);
  ctx.stroke();
}

// --- PUENTE ---
function drawBridge() {
  ctx.fillStyle = COLORES.puente;
  ctx.strokeStyle = COLORES.negro;
  
  ctx.beginPath();
  ctx.moveTo(180, 320);
  ctx.quadraticCurveTo(280, 290, 380, 320);
  ctx.lineTo(380, 350);
  ctx.quadraticCurveTo(280, 320, 180, 350);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Tablones
  ctx.fillStyle = COLORES.puenteTablones;
  for (let i = 0; i < 5; i++) {
    let x = 200 + i * 40;
    ctx.fillRect(x - 2, 310, 25, 8);
    ctx.strokeRect(x - 2, 310, 25, 8);
  }
}

// --- CONEJO ---
function drawRabbit(x, y) {
  ctx.fillStyle = COLORES.animalRelleno;
  ctx.strokeStyle = COLORES.animalBorde;
  
  // Cuerpo
  ctx.beginPath();
  ctx.ellipse(x, y, 12, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Cabeza
  ctx.beginPath();
  ctx.ellipse(x + 8, y - 8, 7, 9, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Orejas
  ctx.fillRect(x + 4, y - 22, 2, 12);
  ctx.fillRect(x + 10, y - 22, 2, 12);
  ctx.strokeRect(x + 4, y - 22, 2, 12);
  ctx.strokeRect(x + 10, y - 22, 2, 12);
  
  // Ojos
  ctx.fillStyle = COLORES.animalBorde;
  ctx.beginPath();
  ctx.arc(x + 9, y - 10, 1.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + 14, y - 10, 1.2, 0, Math.PI * 2);
  ctx.fill();
  
  // Nariz
  ctx.fillStyle = '#FFB6C1';
  ctx.beginPath();
  ctx.arc(x + 11.5, y - 6, 1, 0, Math.PI * 2);
  ctx.fill();
}

// --- ARDILLA ---
function drawSquirrel(x, y) {
  ctx.fillStyle = COLORES.ardillaRelleno;
  ctx.strokeStyle = COLORES.animalBorde;
  
  // Cuerpo
  ctx.beginPath();
  ctx.ellipse(x, y, 10, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Cabeza
  ctx.beginPath();
  ctx.arc(x + 8, y - 7, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Cola
  ctx.fillStyle = COLORES.ardillaRelleno;
  ctx.beginPath();
  ctx.ellipse(x - 8, y - 5, 8, 5, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Orejas
  ctx.fillStyle = COLORES.ardillaRelleno;
  ctx.beginPath();
  ctx.arc(x + 5, y - 13, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 11, y - 13, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Ojos
  ctx.fillStyle = COLORES.animalBorde;
  ctx.beginPath();
  ctx.arc(x + 9, y - 9, 1, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + 13, y - 9, 1, 0, Math.PI * 2);
  ctx.fill();
}

// --- FLOR DE 5 PÉTALOS ---
function drawFlower(x, y) {
  // Pétalos
  ctx.fillStyle = COLORES.florRosa;
  ctx.strokeStyle = COLORES.animalBorde;
  
  for (let i = 0; i < 5; i++) {
    let angle = (i * 72) * Math.PI / 180;
    let px = x + Math.cos(angle) * 6;
    let py = y + Math.sin(angle) * 6;
    ctx.beginPath();
    ctx.arc(px, py, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  
  // Centro
  ctx.fillStyle = COLORES.florCentro;
  ctx.beginPath();
  ctx.arc(x, y, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

// --- PIEDRAS ---
function drawStones() {
  ctx.fillStyle = COLORES.piedra;
  ctx.strokeStyle = COLORES.animalBorde;
  
  const piedras = [
    [320, 460], [350, 465], [380, 455], [410, 470], [440, 460]
  ];
  
  piedras.forEach(pos => {
    ctx.beginPath();
    ctx.ellipse(pos[0], pos[1], 5, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
}

// --- ESCENA PRINCIPAL ---
function drawScene() {
  drawSky();
  drawBackgroundMountains();
  drawGround();
  
  drawSun();
  drawCloud(180, 70);
  drawCloud(380, 60);
  drawCloud(520, 90);
  
  drawRiver();
  drawBridge();
  
  // ÁRBOLES - Mezcla de redondos, pinos de 3 y 4 triángulos
  drawTreeRound(60, 310);      // Árbol redondo
  drawTreeRound(140, 320);     // Árbol redondo
  drawTreePine3(230, 340);     // Pino de 3 triángulos
  drawTreeRound(300, 320);     // Árbol redondo
  drawTreePine4(380, 350);     // Pino de 4 triángulos
  drawTreeRound(450, 330);     // Árbol redondo
  drawTreePine3(520, 350);     // Pino de 3 triángulos
  
  // Animales
  drawRabbit(120, 450);
  drawRabbit(400, 470);
  drawSquirrel(280, 400);
  
  // Flores
  drawFlower(200, 470);
  drawFlower(220, 480);
  drawFlower(240, 460);
  drawFlower(330, 480);
  drawFlower(350, 470);
  
  drawStones();
}

drawScene();