// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createSecureContext } from "tls";
import { GameCanvas } from "./constants.js";
import Logger from "./tools/Logger.js";

export function initCanvas(): GameCanvas {
  const game = document.getElementById("gameCanvas") as HTMLCanvasElement | null;

  if (game === null) {
    Logger({ status: "ERROR", message: "Game element not found" });
    throw new Error("game element not found");
  }

  game.width = window.innerWidth;
  game.height = window.innerHeight;

  const ctx = game.getContext("2d");

  if (ctx === null) {
    Logger({ status: "ERROR", message: "Game context not found" });
    throw new Error("game context not found");
  }

  Logger({ status: "INFO", message: "Game initialized successfully" });
  return { game, gameCtx: ctx };
}

export function createScene(id: string, width: number, height: number) {
  const canvas = document.createElement('canvas');
  const canvasCtx = canvas.getContext("2d");
  if (!canvasCtx) {
    throw new Error("[Kio-T-Engine]: Coudlnt create canvas context")
  }
  canvas.id     = id;
  canvas.width  = width;
  canvas.height = height;
  
  return { canvas, canvasCtx}
}

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

export function updateFPS(dt: number, ctx: CanvasRenderingContext2D) {
  
  const fps = 1 / dt

  Logger({ status: "DEBUG", message: `FPS: ${Math.round(fps)}` })
  
  updateLayer(ctx, (ctx: CanvasRenderingContext2D) => {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText(`FPS: ${Math.round(fps)}`, ctx.canvas.width - 10, 10);
  })
}