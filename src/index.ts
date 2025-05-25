// src/server.ts
import express, { Request, Response } from 'express';
import { Room, RoomServiceClient, AccessToken } from 'livekit-server-sdk';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// LiveKit server configuration

const livekitHost = 'https://my.livekit.host';
const svc = new RoomServiceClient(livekitHost, 'api-key', 'secret-key');



// Endpoint to create a room
app.post('/create-room', async (req: Request, res: Response) => {

    const roomName = req.body.roomName || 'default-room';

    const opts = {
        name: roomName,
        // timeout in seconds
        emptyTimeout: 10 * 60,
        maxParticipants: 20,
    };

    try {
        svc.createRoom(opts).then((room: Room) => {
            console.log('room created', room);
        });

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to get a token for a participant
app.post('/token', async (req: Request, res: Response) => {
    const { roomName, participantId } = req.body;

    const at = new AccessToken('api-key', 'secret-key', {
        identity: participantId,
    });
    at.addGrant({ roomJoin: true, room: roomName });

    const token = await at.toJwt();
    console.log('access token', token);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
