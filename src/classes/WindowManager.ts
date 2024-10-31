// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";

/**
 * Manages window resizing events and handles dynamic resizing of the game canvas.
 */
export class WindowManager {
  /** The current width of the window. */
  private currentWidth: number;

  /** The current height of the window. */
  private currentHeight: number;

  /**
   * Creates a new instance of WindowManager and sets up an event listener for window resizing.
   * It initializes the window dimensions.
   *
   * @example
   * const windowManager = new WindowManager();
   */
  constructor() {
    this.currentWidth = window.innerWidth;
    this.currentHeight = window.innerHeight;

    window.addEventListener("resize", this.onResize.bind(this));
  }

  /**
   * Handles the `resize` event and updates the window dimensions.
   * If the window size has changed, it logs the new dimensions.
   *
   * @example
   * // Automatically called when the window is resized
   */
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

  /**
   * Returns the current window dimensions.
   *
   * @returns An object containing the current width and height of the window.
   * @example
   * const dimensions = windowManager.getDimensions(); // { width: 1280, height: 720 }
   */
  private getDimensions(): { width: number; height: number } {
    return { width: this.currentWidth, height: this.currentHeight };
  }

  /**
   * Resizes the game canvas to match the current window dimensions.
   *
   * @param canvas - The HTMLCanvasElement representing the game canvas.
   * @example
   * const canvas = document.querySelector("canvas");
   * windowManager.resizeCanvas(canvas);
   */
  public resizeCanvas(canvas: HTMLCanvasElement): void {
    const { width, height } = this.getDimensions();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;

      Logger({
        status: "INFO",
        message: `Canvas resized to: ${width}x${height}`,
      });
    }
  }
}
