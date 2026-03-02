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

/*Dibuja el cielo*/
function drawSky() {
  ctx.fillStyle = '#87CEEB'; // azul cielo
  ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6);
}

/*Dibuja el suelo o césped*/
function drawGround() {
  ctx.fillStyle = '#7CFC00'; // verde pasto
  ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
}

/* Dibuja el sol */
function drawSun(x = 100, y = 100, r = 40) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD700'; // amarillo dorado
  ctx.fill();
}

// ========== 3. ESCENA PRINCIPAL ==========
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSky();
  drawGround();
  drawSun();
}

// Inicializar y dibujar
initCanvas();
drawScene();