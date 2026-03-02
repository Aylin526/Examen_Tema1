/**
 * ============================================================
 * Aplicación: Paisaje en Canvas 2D
 * Autor: Aylin Guadalupe Lucas Alvarado
 * Descripción: Dibujo programático del paisaje con figuras básicas
 * Fecha: 01/03/2026
 */

// ========== 1. CONFIGURACIÓN INICIAL ==========
const canvas = document.getElementById('bosqueCanvas');
const ctx = canvas.getContext('2d');

/*Ajusta el tamaño del canvas*/
function resizeCanvas() {
  canvas.width = 800;
  canvas.height = 600;
}

/*Inicializa el canvas*/
function initCanvas() {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

// ========== 2. FIGURAS DEL FONDO ==========

// Dibuja el cielo
function drawSky() {
  ctx.fillStyle = '#87CEEB'; // azul cielo
  ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6);
}

// Dibuja el suelo o césped
function drawGround() {
  ctx.fillStyle = '#7CFC00'; // verde pasto
  ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
}

// Dibuja el sol
function drawSun(x = 100, y = 100, r = 40) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD700'; // amarillo dorado
  ctx.fill();
}

// == 3 Elementos naturales: nubes y piedras ==========

// Dibuja un círculo (figura básica reutilizable)
function drawCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Dibuja una nube con tres círculos
function drawCloud(x, y) {
  drawCircle(x, y, 25, 'white');
  drawCircle(x + 25, y + 10, 25, 'white');
  drawCircle(x - 25, y + 10, 25, 'white');
}

// Dibuja una piedra simple
function drawStone(x, y, r) {
  drawCircle(x, y, r, 'gray');
}

// Añadir llamadas dentro de drawScene()
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSky();
  drawGround();
  drawSun();

  // Nubes
  drawCloud(600, 100);
  drawCloud(700, 150);

  // Piedras
  drawStone(700, 500, 20);
  drawStone(730, 510, 15);
  drawStone(680, 510, 10);
}
// ========== 5. ÁRBOLES ==========

// Dibuja un tronco de árbol
function drawTrunk(x, y, w = 20, h = 80) {
  ctx.fillStyle = '#8B4513'; // marrón
  ctx.fillRect(x, y, w, h);
}

// Dibuja la copa del árbol (círculo verde)
function drawCrown(x, y, r = 40, color = '#2E8B57') {
  drawCircle(x, y, r, color);
}

// Dibuja un árbol completo combinando tronco y copa
function drawTree(x, y, scale = 1, color = '#2E8B57') {
  const trunkHeight = 80 * scale;
  const trunkWidth = 20 * scale;
  const crownRadius = 40 * scale;
  drawTrunk(x, y, trunkWidth, trunkHeight);
  drawCrown(x + trunkWidth / 2, y, crownRadius, color);
}

// ========== ESCENA PRINCIPAL ==========
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSky();
  drawGround();
  drawSun();

  // Nubes
  drawCloud(600, 100);
  drawCloud(700, 150);

  // Piedras
  drawStone(700, 500, 20);
  drawStone(730, 510, 15);
  drawStone(680, 510, 10);

  // Árboles
  drawTree(150, 320, 1, '#2E8B57');
  drawTree(250, 330, 0.9, '#228B22');
  drawTree(350, 310, 1.1, '#006400');
  drawTree(500, 320, 1, '#228B22');
  drawTree(650, 340, 0.8, '#2E8B57');
}
// ========== 6. RÍO Y PUENTE ==========

// Dibuja el río usando una curva Bézier
function drawRiver() {
  ctx.beginPath();
  ctx.moveTo(0, 400);
  ctx.bezierCurveTo(200, 420, 400, 500, 800, 470);
  ctx.lineWidth = 30;
  ctx.strokeStyle = '#1E90FF'; // azul del agua
  ctx.stroke();
  ctx.closePath();
}

// Dibuja un puente simple de madera
function drawBridge() {
  ctx.fillStyle = '#A0522D'; // marrón madera
  ctx.fillRect(380, 430, 60, 15);
  ctx.fillRect(380, 445, 60, 5);
  ctx.strokeStyle = '#5C3317';
  ctx.lineWidth = 2;
  ctx.strokeRect(380, 430, 60, 20);
}

// ========== ESCENA PRINCIPAL ==========
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSky();
  drawGround();
  drawSun();

  // Nubes
  drawCloud(600, 100);
  drawCloud(700, 150);

  // Piedras
  drawStone(700, 500, 20);
  drawStone(730, 510, 15);
  drawStone(680, 510, 10);

  // Árboles
  drawTree(150, 320, 1, '#2E8B57');
  drawTree(250, 330, 0.9, '#228B22');
  drawTree(350, 310, 1.1, '#006400');
  drawTree(500, 320, 1, '#228B22');
  drawTree(650, 340, 0.8, '#2E8B57');

  // Río y puente
  drawRiver();
  drawBridge();
}
// ==== 7. Animales: conejo, ardilla y pájaro =====

// Dibuja un conejo sencillo con dos círculos (cuerpo y cabeza)
function drawRabbit(x, y) {
  // Cuerpo
  drawCircle(x, y, 15, 'white');
  // Cabeza
  drawCircle(x + 15, y - 10, 10, 'white');
  // Orejas
  ctx.fillStyle = 'white';
  ctx.fillRect(x + 20, y - 30, 5, 15);
  ctx.fillRect(x + 10, y - 30, 5, 15);
}

// Dibuja una ardilla con círculos y una cola curva
function drawSquirrel(x, y) {
  // Cuerpo
  drawCircle(x, y, 15, '#C68642');
  // Cabeza
  drawCircle(x + 15, y - 10, 10, '#C68642');
  // Cola
  ctx.beginPath();
  ctx.arc(x - 10, y - 5, 10, Math.PI / 2, Math.PI * 1.5);
  ctx.strokeStyle = '#C68642';
  ctx.lineWidth = 8;
  ctx.stroke();
}

// Dibuja un pájaro con forma de triángulo
function drawBird(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 10, y - 10);
  ctx.lineTo(x + 20, y);
  ctx.closePath();
  ctx.fillStyle = '#FF8C00'; // naranja
  ctx.fill();
  ctx.stroke();
}

// === Llamar animales dentro de drawScene() ===
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSky();
  drawGround();
  drawSun();

  // Nubes
  drawCloud(600, 100);
  drawCloud(700, 150);

  // Piedras
  drawStone(700, 500, 20);
  drawStone(730, 510, 15);
  drawStone(680, 510, 10);

  // Árboles
  drawTree(150, 320, 1, '#2E8B57');
  drawTree(250, 330, 0.9, '#228B22');
  drawTree(350, 310, 1.1, '#006400');
  drawTree(500, 320, 1, '#228B22');
  drawTree(650, 340, 0.8, '#2E8B57');

  // Río y puente
  drawRiver();
  drawBridge();

  // Animales
  drawRabbit(200, 450);
  drawRabbit(600, 460);
  drawSquirrel(500, 420);
  drawBird(320, 420);
}

// Inicializar y dibujar
initCanvas();
drawScene();