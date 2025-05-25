import { Request, Response } from 'express';
import { RoomServiceClient, AccessToken } from 'livekit-server-sdk';
import { livekitHost, apiKey, secretKey } from '../config';
import RoomModel from '../models/roomModel';

const svc = new RoomServiceClient(livekitHost, apiKey, secretKey);

export const createRoom = async (req: Request, res: Response) => {
    const roomName = req.body.roomName || 'default-room';

    const opts = {
        name: roomName,
        emptyTimeout: 10 * 60,
        maxParticipants: 20,
    };

    try {
        const room = await svc.createRoom(opts);
        console.log('Room created:', room);
        RoomModel.saveRoom(room); // Save room info to the database
        res.status(201).json({ roomName: room.name });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const generateToken = (req: Request, res: Response) => {
    const { roomName, participantId } = req.body;

    const at = new AccessToken(apiKey, secretKey, {
        identity: participantId,
    });
    at.addGrant({ roomJoin: true, room: roomName });

    const token = at.toJwt();
    console.log('Access token:', token);
    res.json({ token });
};
