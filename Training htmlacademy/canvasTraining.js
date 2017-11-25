"use strict";

// DOM-элемент канваса
var canvas = document.getElementById('canvas');

// Контекст отрисовки
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(80, 60);
ctx.lineTo(110, 80);
ctx.lineTo(125, 40);
ctx.lineTo(140, 80);
ctx.lineTo(170, 60);
ctx.lineTo(150, 100);
ctx.lineTo(150, 100);
ctx.stroke();
