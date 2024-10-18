// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";

/**
 * Manages keyboard input for the application, including tracking key presses and handling pause functionality.
 */
export class InputManager {
  /** A set containing the keys currently pressed by the user. */
  private keys: Set<string> = new Set();

  /** A flag indicating whether the game is paused. */
  private isPaused: boolean = false;

  /**
   * Creates an instance of InputManager and sets up event listeners for keydown and keyup events.
   * 
   * @example
   * const inputManager = new InputManager();
   */
  constructor() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    document.addEventListener("keyup", (event) => {
      this.keys.delete(event.key);
    });
  }

  /**
   * Handles the `keydown` event, adding the pressed key to the set of active keys and checking for the pause toggle.
   *
   * @param event - The KeyboardEvent containing details of the key pressed.
   * @example
   * // Called automatically when a key is pressed
   */
  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.togglePause();
      Logger({ status: "DEBUG", message: "Pausing not implemented yet" });
    }
    this.keys.add(event.key.toLowerCase());
  }

  /**
   * Toggles the paused state of the game and logs the action using the Logger.
   *
   * @example
   * // Called when the Escape key is pressed
   */
  private togglePause(): void {
    this.isPaused = !this.isPaused;
    Logger({ status: "INFO", message: `Game ${this.isPaused ? "paused" : "resumed"}` });
  }

  /**
   * Checks if a specific key is currently pressed.
   *
   * @param key - The key to check (case-insensitive).
   * @returns `true` if the key is currently pressed, `false` otherwise.
   * @example
   * if (inputManager.isKeyPressed("w")) {
   *   // Move forward
   * }
   */
  isKeyPressed(key: string): boolean {
    return this.keys.has(key.toLowerCase());
  }
  

  /**
   * Checks if the game is currently paused.
   *
   * @returns `true` if the game is paused, `false` otherwise.
   * @example
   * if (inputManager.isGamePaused()) {
   *   // Pause game logic
   * }
   */
  isGamePaused(): boolean {
    return this.isPaused;
  }
}
