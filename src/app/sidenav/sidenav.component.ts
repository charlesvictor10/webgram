import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  
  dir: any = sessionStorage.getItem("dir") ? sessionStorage.getItem("dir") : 'ltr';
  
  constructor() { }

  ngOnInit(): void {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
    sessionStorage.setItem("dir", this.dir);
  }
}
