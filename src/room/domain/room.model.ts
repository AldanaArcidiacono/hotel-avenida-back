export type roomCategory =
    | 'double'
    | 'triple'
    | 'cuadruple'
    | 'quintuple'
    | 'sextuple';

export default class Room {
    constructor(
        public id: string,
        public roomNumber: string,
        public category: roomCategory,
        public img: string[],
        public price: number,
        public reservationDate: string
    ) {}
}
