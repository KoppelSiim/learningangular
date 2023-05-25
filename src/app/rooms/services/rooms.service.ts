import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenities: 'Air conditioner, Free Wifi, TV, Kitchen',
      price: 200,
      photo: 'www.imagejne.ee',
      checkInTime: new Date('20-Mar-2023'),
      checkOutTime: new Date('1-May-2023'),
      rating: 4.45678
    },
    {
      roomNumber: 2,
      roomType: 'Common',
      amenities: 'TV, Kitchen',
      price: 100,
      photo: 'www.commonjne.ee',
      checkInTime: new Date('2-May-2023'),
      checkOutTime: new Date('9-May-2023'),
      rating: 3.834343
    },
    {
      roomNumber: 3,
      roomType: 'Elegant',
      amenities: 'Kingsize bed, Free Wifi, TV, Kitchen, free Food',
      price: 250,
      photo: 'www.elegantjne.ee',
      checkInTime: new Date('2-July-2023'),
      checkOutTime: new Date('15-July-2023'),
      rating: 4.734343
    }
  ];

  constructor() { }

  getRooms() {
    return this.roomList;
  }
}
