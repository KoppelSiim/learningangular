import { AfterViewInit, Component, Inject, OnInit, Optional, ViewChild, ViewContainerRef} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import{localStroageToken} from './localstorage.token'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "Hotel inventory app";
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(@Inject(localStroageToken) private localStorage: Storage)

  {

  }

  ngOnInit() {
    this.localStorage.setItem('name','Hilton Hotel');
  }

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;

  }
}
