# LiveKit Streaming Project

This project is a live streaming application built using Node.js and TypeScript, leveraging the LiveKit SDK for real-time video and audio communication.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create rooms for live streaming.
- Generate access tokens for participants.
- Real-time audio and video communication.

## Technologies

- **Node.js**: JavaScript runtime for building server-side applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Express**: Web framework for Node.js.
- **LiveKit**: SDK for building real-time audio and video applications.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

## Installation

1. Clone the repository:
```
   git clone https://github.com/yourusername/livekit-streaming.git
   cd livekit-streaming
```
2.Install dependencies:
```
   npm install
```
3.Configure your LiveKit credentials in src/config.ts:
```
export const livekitHost = 'https://my.livekit.host';
export const apiKey = 'your-api-key';
export const secretKey = 'your-secret-key';
```
