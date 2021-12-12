import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
      <a
        routerLink="/"
        class="navbar-brand d-flex align-items-center"
        ><strong>Welcome to the (work)shop!</strong></a
      >
    </div>
  </div>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
