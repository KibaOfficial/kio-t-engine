<!--
 Copyright (c) 2024 KibaOfficial
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Changelog

All notable changes to this project will be documented in this file.

## 2024-10-24
### Added
- Changelog file for future updates.
- GameTitle getters and setters.
- A new `initGame` function which sets the window title before the loop continues.

### Changed
- **Window/Scene resizing**:
  - Now only resizes when the window has really changed.

### Removed
- `<title>` tag from the HTML.

## 2024-10-29

### Added
- **Readme.md**
  - Added Wakatime stats

### Changed
- **Window/Scene resizing**:
  - Moved window resize detection to the WindowManager from the main gameloop

### Work in progress
- **Scene**
  - Working on set scene color via the Scene constructor instead of the styles.css

## 2024-11-01
### Added
- **Multiple Active Scenes**:
  - Updated `SceneManager` to support multiple active scenes.
  - Added `activateScene` and `deactivateScene` methods to manage active scenes.
  - Modified `update` and `render` methods to iterate over all active scenes.
- **UI Scene**:
  - Created a new `uiScene` to render UI elements on top of the `gameScene`.
  - Added `uiScene` to the `SceneManager` and activated it alongside `gameScene`.

### Changed
- **Canvas Resizing**:
  - Moved canvas resizing logic to `SceneManager`'s `update` and `render` methods to ensure all active scenes are resized appropriately.
  - Updated `WindowManager` to handle resizing multiple canvases.
- **Game Loop**:
  - Removed direct calls to `resizeCanvas` from the `gameLoop` function.
  - Updated `gameLoop` to render both `gameScene` and `uiScene`.

### Fixed
- **FPS Display**:
  - Ensured FPS display is rendered on the `uiScene` canvas, which is always on top of the `gameScene`.

### Removed
- **Single Active Scene Limitation**:
  - Removed the limitation of having only one active scene at a time in the `SceneManager`.

## 2024-11-06
### Added
- **SceneManager**:
  - Added support for multiple active scenes.
  - Implemented `activateScene` and `deactivateScene` methods to manage active scenes.
- **Scene**:
  - Added `clear` method to clear the canvas.
  - Added `update` and `render` methods for scene-specific logic.
- **DeltaTime**:
  - Added `logDelta` method to log the current delta time for debugging.
  - Added `reset` method to reset delta time and last frame time.

### Changed
- **Game Loop**:
  - Updated `gameLoop` to render both `gameScene` and `uiScene`.
  - Removed direct calls to `resizeCanvas` from the `gameLoop` function.
- **WindowManager**:
  - Updated to handle resizing multiple canvases.
- **FPS Display**:
  - Ensured FPS display is rendered on the `uiScene` canvas, which is always on top of the `gameScene`.

### Fixed
- **SceneManager**:
  - Fixed issue with resizing logic to ensure all active scenes are resized appropriately.

### Removed
- **Single Active Scene Limitation**:
  - Removed the limitation of having only one active scene at a time in the `SceneManager`.
