import { model, Schema } from 'mongoose';
import Room from '../../room/domain/room.model';

const roomSchema = new Schema<Room>({
    roomNumber: {
        type: String,
        required: true,
        unique: false,
    },
    category: {
        type: String,
        required: true,
        unique: false,
    },
    img: [
        {
            type: String,
            required: true,
            unique: false,
        },
    ],
    price: {
        type: Number,
        required: true,
        unique: false,
    },
    reservationDate: {
        type: String,
        required: true,
        unique: false,
    },
});

roomSchema.set('toJSON', {
    transform(_document, returnObject) {
        returnObject.id = returnObject._id;
        delete returnObject.__v;
        delete returnObject._id;
    },
});

export const RoomModel = model('Rooms', roomSchema, 'game');
