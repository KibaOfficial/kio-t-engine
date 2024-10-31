// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getGameTitle, setGameInit, setGameTitle } from "./constants.js";

export function updateLayer(
  ctx: CanvasRenderingContext2D | null,
  drawFn: (ctx: CanvasRenderingContext2D) => void
): void {
  if (ctx === null) {
    return;
  }
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawFn(ctx);
}

export function initGame(): void {
  // Set gametitle
  setGameTitle("Kio T Engine");
  document.title = getGameTitle();
  setGameInit(true);
}

export function updateFPS(dt: number, ctx: CanvasRenderingContext2D) {
  const fps = 1 / dt;

  updateLayer(ctx, (ctx: CanvasRenderingContext2D) => {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText(`FPS: ${Math.round(fps)}`, ctx.canvas.width - 10, 10);
  });
}