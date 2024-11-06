// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from '../tools/Logger';

/**
 * Represents a utility for tracking and calculating delta time (the time difference between frames),
 * often used for consistent frame-based animations and game loops.
 */
export class DeltaTime {
    /** The timestamp of the last frame. */
    private lastTime: DOMHighResTimeStamp = 0;

    /** The time difference between the current and the last frame, in seconds. */
    private deltaTime: number = 0;

    /**
     * Creates a new instance of DeltaTime.
     * Initializes `lastTime` and `deltaTime` to 0.
     * @example
     * const deltaTime = new DeltaTime();
     */
    constructor() {}

    /**
     * Updates the delta time based on the current frame's timestamp.
     *
     * @param currentTime - The current time in milliseconds, typically from `performance.now()`.
     * @example
     * requestAnimationFrame((currentTime) => {
     *   deltaTime.update(currentTime);
     * });
     */
    update(currentTime: DOMHighResTimeStamp): void {
        if (this.lastTime === 0) {
            this.lastTime = currentTime;
        }

        this.deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        Logger({ status: "INFO", message: `Delta time: ${this.deltaTime.toFixed(3)} seconds` });
    }

    /**
     * Gets the time difference (in seconds) between the current and previous frame.
     *
     * @returns The delta time in seconds.
     * @example
     * const delta = deltaTime.getDelta(); // e.g., 0.016 for ~60FPS
     */
    getDelta(): number {
        return this.deltaTime;
    }

    /**
     * Resets the delta time and the last frame time.
     * This can be useful when restarting or resetting a game or animation.
     * @example
     * deltaTime.reset();
     */
    reset(): void {
        this.lastTime = 0;
        this.deltaTime = 0;
    }

    /**
     * Logs the current delta time to the console, formatted to three decimal places.
     * Useful for debugging or monitoring performance.
     * @example
     * deltaTime.logDelta(); // "Delta time: 0.016 seconds"
     */
    logDelta(): void {
        Logger({ status: "INFO", message: `Delta time: ${this.deltaTime.toFixed(3)} seconds` });
    }
}