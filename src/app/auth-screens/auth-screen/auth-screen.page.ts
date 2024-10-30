import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.page.html',
  styleUrls: ['./auth-screen.page.scss'],
})
export class AuthScreenPage  {
  segmentValue = '1';
  constructor() {}


  segmentChanged(event: any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }
}
