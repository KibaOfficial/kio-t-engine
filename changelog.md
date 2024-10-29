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
