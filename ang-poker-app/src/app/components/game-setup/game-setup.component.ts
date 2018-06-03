import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {
  public filteredUsers: any;
  public users: any;

  constructor() { }

  ngOnInit() {
  }
assignCopy() {
  this.filteredUsers = Object.assign([], this.users);
}
/* filterItem(value){ */
//   if(!value) { this.assignCopy() }
//   this.filteredItems = Object.assign([], this.items).filter(
//       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
//    )
// }
/* this.assignCopy(); */
}
