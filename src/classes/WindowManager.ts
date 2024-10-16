// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";

export class WindowManager {
  private currentWidth: number;
  private currentHeight: number;

  constructor() {
    this.currentWidth = window.innerWidth;
    this.currentHeight = window.innerHeight;

    window.addEventListener("resize", this.onResize.bind(this));
  }

  private onResize(): void {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (this.currentWidth !== newWidth || this.currentHeight !== newHeight) {
      this.currentWidth = newWidth;
      this.currentHeight = newHeight;

      Logger({
        status: "INFO",
        message: `Window resized to: ${this.currentWidth}x${this.currentHeight}`,
      });
    }
  }

  private getDimensions(): { width: number; height: number } {
    return { width: this.currentWidth, height: this.currentHeight };
  }

  public resizeCanvas(game: HTMLCanvasElement): void {
    const { width, height } = this.getDimensions();
    game.width = width;
    game.height = height;

    Logger({
      status: "INFO",
      message: `Canvas resized to: ${width}x${height}`,
    });
  }
}
