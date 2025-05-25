import { Room } from 'livekit-server-sdk';

// Example model to hold room data
class RoomModel {
    static rooms: Room[] = []; // In-memory storage for demo purposes

    static saveRoom(room: Room) {
        this.rooms.push(room);
        // You can add database logic here to save the room
    }

    static getRooms() {
        return this.rooms;
    }
}

export default RoomModel;
