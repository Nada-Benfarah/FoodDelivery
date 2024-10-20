import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { PopoverController } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { PopoverComponent } from './popover/popover.component';
import { ApiService } from 'src/app/services/api/api.service';
import { register } from 'swiper/element/bundle';

register();
// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {
  colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
  loc = 'Locating...';
  banners: any[] = [];
  categories: any[] = [];
  favorites: any[] = [];
  offers: any[] = [];
  nearby: any[] = [];
  bannerConfig!: SwiperOptions;
  categoryConfig!: SwiperOptions;
  restaurantConfig!: SwiperOptions;

  constructor(
    public popoverController: PopoverController,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.banners = [
      { banner: 'assets/dishes/11.jpeg' },
      { banner: 'assets/dishes/3.jpg' },
      { banner: 'assets/dishes/cab.jpg' },
    ];
    this.categories = this.api.categories;
    this.favorites = this.api.allRestaurants;
    const offers = [...this.api.allRestaurants];
    this.offers = offers.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    this.nearby = this.api.allRestaurants;
    this.getCurrentLocation();
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: this.banners?.length > 1 ? 1 : 0,
      autoplay: {
        delay: 3000,
      },
      pagination: { clickable: true },
    };
    this.categoryConfig = {
      slidesPerView: 3.5,
    };
    this.restaurantConfig = {
      slidesPerView: 1.1,
    };
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
    } catch (e) {
      console.log(e);
      this.openPopover();
    }
  }

  openPopover() {
    const ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            left: 5,
          };
        },
      },
    };
    this.presentPopover(ev);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with data', data);
    if (data) {
      this.requestGeolocationPermission();
    } else {
      this.loc = 'Karol Bagh, Delhi';
    }
  }

  async requestGeolocationPermission() {
    try {
      const status = await Geolocation.requestPermissions();
      console.log(status);
      if (status?.location == 'granted') this.getCurrentLocation();
      else this.loc = 'Petite Ariana, Tunisia';
    } catch (e) {
      console.log(e);
    }
  }
}
