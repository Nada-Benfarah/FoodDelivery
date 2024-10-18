import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild('tabs', { static: false, read: IonTabs })
  tabs!: IonTabs;
  selectedTab: any;

  constructor() {}

  ngOnInit() {}

  setCurrentTab() {
    console.log(this.tabs);
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }
}
