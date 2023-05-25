import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit,AfterViewChecked,DoCheck {

  numberOfRooms = 10;
  hotelName = 'Hilton Hotel';
  hideRooms = false;
  roomSelected!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];
  title = 'Room list';

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  constructor() { }

  ngOnInit(): void {

    this.roomList = [{
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
  }

  ngDoCheck(){
    console.log('on changes is called')
  }


  ngAfterViewInit() {
    this.headerComponent.title = "Rooms view";

  }

  ngAfterViewChecked(){
    console.log('View has been checked')
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'List of rooms'

  }

  selectRoom(room: RoomList) {
    this.roomSelected = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Mega Deluxe Room",
      amenities: "Free wifi, TV, Kitchen, Bathroom, Sauna, VIP Service, All Inclusive",
      price: 500,
      photo: "www.megadeluxeroomjne.ee",
      checkInTime: new Date("1-May-2023"),
      checkOutTime: new Date("17-May-2023"),
      rating: 4.89
    };

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }
}
