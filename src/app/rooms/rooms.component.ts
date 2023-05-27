import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
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
  //roomService = new RoomsService();
  constructor(private roomsService:RoomsService) { }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
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
