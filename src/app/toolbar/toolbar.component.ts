import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleDir = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  openNotif() {

  }

  openDialog() {

  }

  openUser() {

  }

  logout() {

  }

  /*supprimerNotif(notif) {

  }*/
}
