import { RoomServiceClient } from 'livekit-server-sdk';
import { livekitHost, apiKey, secretKey } from '../config';

const svc = new RoomServiceClient(livekitHost, apiKey, secretKey);

export const createRoom = async (opts: any) => {
    return await svc.createRoom(opts);
};

// You can add more LiveKit-related functions here
