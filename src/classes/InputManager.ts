// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";

export class InputManager {
  private keys: Set<string> = new Set();
  private isPaused: boolean = false;

  constructor() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    document.addEventListener("keyup", (event) => {
      this.keys.delete(event.key);
    });
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.togglePause();
      Logger({status: "DEBUG", message: "Pausing not implemeneted yet"})
    }
    this.keys.add(event.key.toLowerCase());
  }

  private togglePause(): void {
    this.isPaused = !this.isPaused;
    Logger({ status: "INFO", message: `Game ${this.isPaused ? "paused" : "resumed"}`,
    });
  }

  isKeyPressed(key: string): boolean {
    return this.keys.has(key.toLowerCase());
  }

  isGamePaused(): boolean {
    return this.isPaused;
  }
}