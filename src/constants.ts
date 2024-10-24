// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let gameInit: boolean = false;
let gameRun: boolean = true;
let gameTitle: string = "Kio T Engine"

export interface GameCanvas {
    game: HTMLCanvasElement | null;
    gameCtx: CanvasRenderingContext2D | null;
}

// Setters
export function setGameInit(value: boolean): void {
    gameInit = value;
}

export function setGameRun(value: boolean): void {
    gameRun = value;
}

export function setGameTitle(title: string): void {
    gameTitle = title
}

// Getters
export function getGameInit(): boolean {
    return gameInit;
}

export function getGameRun(): boolean {
    return gameRun;
}

export function getGameTitle(): string {
    return gameTitle;
}

// Reset all game states
export function resetGameStates(): void {
    gameInit = false;
    gameRun = true;
}
