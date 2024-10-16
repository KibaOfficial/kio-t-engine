// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Vector2 } from "./classes/Vector2.js";

export function drawLine(ctx: CanvasRenderingContext2D, p1: Vector2, p2: Vector2, color: string = 'white', lineWidth: number = 1 ): void {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;

  ctx.moveTo(...p1.array());
  ctx.lineTo(...p2.array());

  ctx.stroke();
  ctx.restore();
}

export function drawPauseOverlay(ctx: CanvasRenderingContext2D | null) {
  if (ctx) {
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); 

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center"; 
    ctx.textBaseline = "middle";

    ctx.fillText("Game Paused", ctx.canvas.width / 2, ctx.canvas.height / 2 - 20);

    ctx.font = "italic 24px Arial";
    ctx.fillText("Press 'Esc' to continue", ctx.canvas.width / 2, ctx.canvas.height / 2 + 40);

    ctx.restore();
  }
}
