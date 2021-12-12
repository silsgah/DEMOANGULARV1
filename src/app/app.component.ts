import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleDef } from './example.mode';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  constructor(fb: FormBuilder,
    private router: Router,
    @Inject('ExampleDefs') public examples: ExampleDef[]) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
