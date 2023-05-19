import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room = {
    totalRooms: 20,
    availableRooms:10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe',
    amenities: 'Air conditioner, Free Wifi, TV, Kitchen',
    price: 200,
    photo: 'www.imagejne.ee',
    checkInTime: new Date('20-Mar-2023'),
    checkOutTime: new Date('1-May-2023')
    },
    {
      roomNumber: 2,
      roomType: 'Common',
      amenities: 'TV, Kitchen',
      price: 100,
      photo: 'www.commonjne.ee',
      checkInTime: new Date ('2-May-2023'),
      checkOutTime: new Date('9-May-2023')
    },
    {
      roomNumber: 3,
      roomType: 'Elegant',
      amenities: 'Kingsize bed, Free Wifi, TV, Kitchen, free Food',
      price: 250,
      photo: 'www.elegantjne.ee',
      checkInTime: new Date('2-July-2023'),
      checkOutTime: new Date('15-July-2023')
    }
  ];

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  constructor() { }
  ngOnInit(): void { }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
