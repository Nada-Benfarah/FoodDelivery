import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { IonicSlides } from '@ionic/angular';

import { Router } from '@angular/router';
import { SwiperContainer } from 'swiper/element';
import { register } from 'swiper/element/bundle';
import { INTRO_KEY, StorageService } from 'src/app/services/storage.service';

register();

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  swiperModules = [IonicSlides];
  slideIndex = 0;

  @ViewChild('swiper', { static: true })
  swiper!: ElementRef<SwiperContainer>;
  constructor(private storage: StorageService, private router: Router) {}

  async goToLogin() {
    console.log('Go to login');
    await this.storage.setItem(INTRO_KEY, true);
    this.router.navigate(['/auth-screen'], { replaceUrl: true });
  }

  skip() {
    console.log(this.swiper);

    if (this.swiper) {
      this.swiper.nativeElement.swiper.slideNext();
    }
  }

  onSlideChange() {
    this.slideIndex = this.swiper.nativeElement.swiper.activeIndex;
  }
}
