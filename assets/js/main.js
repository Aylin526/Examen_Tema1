/**
 * ============================================================
 * Aplicación: Paisaje en Canvas 2D
 * Autor: Aylin Guadalupe Lucas Alvarado
 * Descripción: Dibujo programático del paisaje con figuras básicas
 * ============================================================
 */

// ========== 1. CONFIGURACIÓN INICIAL ==========
const canvas = document.getElementById("bosqueCanvas");
const ctx = canvas.getContext("2d");

/*Ajusta el tamaño del canvas*/
function resizeCanvas() {
  canvas.width = 800;
  canvas.height = 600;
}

/*Inicializa el canvas*/
function initCanvas() {
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

// ========== 2. FIGURAS DEL FONDO ==========
function drawSky() {
  ctx.fillStyle = "#A3DFFF"; // azul cielo más suave
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGround() {
  ctx.fillStyle = "#8CE27E"; // verde más natural
  ctx.fillRect(0, 350, canvas.width, 250);
}

function drawSun(x = 100, y = 100, r = 40) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = "#FFD93D";
  ctx.fill();
  // Rayos del sol
  ctx.strokeStyle = "#FFD93D";
  ctx.lineWidth = 3;
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI) / 6;
    const x1 = x + Math.cos(angle) * (r + 5);
    const y1 = y + Math.sin(angle) * (r + 5);
    const x2 = x + Math.cos(angle) * (r + 20);
    const y2 = y + Math.sin(angle) * (r + 20);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

// ========== 3. FIGURA BASE ==========
function drawCircle(x, y, r, color, stroke = true) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

// ========== 4. ELEMENTOS NATURALES ==========
function drawCloud(x, y) {
  drawCircle(x, y, 25, "white", false);
  drawCircle(x + 25, y + 10, 25, "white", false);
  drawCircle(x - 25, y + 10, 25, "white", false);
}

function drawStone(x, y, r) {
  drawCircle(x, y, r, "lightgray");
}

// ========== 5. ÁRBOLES ==========
function drawTree(x, y, scale = 1, color = "#2E8B57") {
  const trunkWidth = 15 * scale;
  const trunkHeight = 100 * scale;
  const crownRadius = 35 * scale;

  // Tronco
  ctx.fillStyle = "#8B5A2B";
  ctx.fillRect(x, y, trunkWidth, trunkHeight);
  ctx.strokeRect(x, y, trunkWidth, trunkHeight);

  // Copa
  drawCircle(x + trunkWidth / 2, y, crownRadius, color);
}

// Árbol triangular tipo pino
function drawPine(x, y, scale = 1) {
  const height = 100 * scale;
  const width = 70 * scale;
  ctx.fillStyle = "#1E8449";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width / 2, y - height);
  ctx.lineTo(x + width, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Tronco
  ctx.fillStyle = "#8B5A2B";
  ctx.fillRect(x + width / 2 - 5, y, 10, 20);
  ctx.strokeRect(x + width / 2 - 5, y, 10, 20);
}

// ========== 6. RÍO Y PUENTE ==========
function drawRiver() {
  ctx.beginPath();
  ctx.moveTo(0, 420);
  ctx.bezierCurveTo(150, 430, 400, 520, 800, 500);
  ctx.lineWidth = 35;
  ctx.strokeStyle = "#1E90FF";
  ctx.fillStyle = "#1E90FF";
  ctx.stroke();
  ctx.closePath();
}

function drawBridge() {
  ctx.fillStyle = "#A0522D";
  ctx.fillRect(380, 440, 80, 15);
  ctx.fillRect(380, 455, 80, 5);
  ctx.strokeRect(380, 440, 80, 20);
}

// ========== 7. ANIMALES ==========
function drawRabbit(x, y) {
  drawCircle(x, y, 15, "white");
  drawCircle(x + 15, y - 10, 10, "white");
  ctx.fillStyle = "white";
  ctx.fillRect(x + 20, y - 30, 5, 15);
  ctx.fillRect(x + 10, y - 30, 5, 15);
  ctx.strokeStyle = "#000";
  ctx.strokeRect(x + 20, y - 30, 5, 15);
  ctx.strokeRect(x + 10, y - 30, 5, 15);
}

function drawSquirrel(x, y) {
  drawCircle(x, y, 15, "#C68642");
  drawCircle(x + 15, y - 10, 10, "#C68642");
  ctx.beginPath();
  ctx.arc(x - 10, y - 5, 10, Math.PI / 2, Math.PI * 1.5);
  ctx.strokeStyle = "#C68642";
  ctx.lineWidth = 8;
  ctx.stroke();
}

function drawBird(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 10, y - 10);
  ctx.lineTo(x + 20, y);
  ctx.closePath();
  ctx.fillStyle = "#FF8C00";
  ctx.fill();
  ctx.stroke();
}

// ========== 8. FLORES Y ARBUSTOS ==========
function drawFlower(x, y) {
  drawCircle(x, y, 5, "#FF69B4");
  drawCircle(x + 6, y, 5, "#FF69B4");
  drawCircle(x - 6, y, 5, "#FF69B4");
  drawCircle(x, y - 6, 5, "#FF69B4");
  drawCircle(x, y + 6, 5, "#FF69B4");
  drawCircle(x, y, 3, "yellow");
}

function drawBush(x, y) {
  drawCircle(x, y, 20, "#228B22");
  drawCircle(x + 15, y, 20, "#2E8B57");
  drawCircle(x - 15, y, 20, "#006400");
}

// ========== 9. ESCENA PRINCIPAL ==========
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSky();
  drawGround();
  drawSun();

  // Nubes
  drawCloud(600, 100);
  drawCloud(700, 160);

  // Piedras
  drawStone(700, 510, 20);
  drawStone(730, 520, 15);
  drawStone(680, 520, 10);

  // Árboles redondos
  drawTree(120, 310, 1, "#6BBF59");
  drawTree(200, 320, 0.9, "#3C9E4D");
  drawTree(300, 300, 1.1, "#006400");
  drawTree(480, 310, 1, "#3C9E4D");
  drawTree(580, 330, 0.9, "#6BBF59");

  // Pinos
  drawPine(90, 360, 0.8);
  drawPine(650, 360, 1);

  // Río y puente
  drawRiver();
  drawBridge();

  // Animales
  drawRabbit(220, 460);
  drawRabbit(600, 480);
  drawSquirrel(520, 430);
  drawBird(320, 440);

  // Flores y arbustos
  drawFlower(400, 490);
  drawFlower(420, 470);
  drawFlower(440, 500);
  drawBush(100, 520);
  drawBush(720, 530);
}

// Inicializar y dibujar
initCanvas();
drawScene();