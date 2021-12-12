import { Component, OnInit, Input } from '@angular/core';
import { ExampleDef } from '../example.mode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('items')
  items!: ExampleDef[];
  constructor() { }

  ngOnInit(): void {
  }

}
