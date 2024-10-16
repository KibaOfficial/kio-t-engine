<!--
 Copyright (c) 2024 KibaOfficial

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Kio T Engine

Kio T Engine is a lightweight 2D game engine written in TypeScript, focused on creating browser-based games with only using the web API. The engine features essential systems like input management, delta time for frame-independent updates, window resizing, and a simple pause system.

## Features

- **DeltaTime Management:** Keeps the game running at a consistent speed across different devices.
- **Input Management:** Handles keyboard events, including a built-in pause toggle.
- **Window Management:** Automatically resizes the game canvas when the window is resized.
- **Pause System:** Displays a built-in pause overlay when the game is paused.
- **Custom Graphics (coming soon):** Includes functions for rendering graphics on the canvas.
  and much more in the future.

## Getting Started

To get started with the project locally, follow these steps:

1. **Prerequisites:**
   Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

2. **Clone the repository:**

```bash
git clone https://github.com/kibaofficial/kio-t-engine.git
```

3. **Install dependencies:**  
   You can use `npm`, `yarn`, `pnpm`, or `bun` depending on your preference.

```bash
cd kio-t-engine
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

4. **Build the project**

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

5. **Start the deployment server**
   After building the project, start the local web server to serve the project files:

```bash
npm run start
```

This command starts the server and makes your project accessible in a web browser at `http://localhost:42069`.

## Usage

Once the server is running, open your browser and navigate to `http://localhost:42069` to view and interact with the project.

## Contributing

Contributions are welcome! If you’d like to help improve Kio T Engine, feel free to:

- Fork the repository
- Submit a pull request
- Report issues or suggest new features in the [issues section](https://github.com/kibaofficial/kio-t-engine/issues)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
