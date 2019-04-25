import { Component } from '@angular/core';
import {AllNews} from '../mock-news';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
news = AllNews;
selected = 'Tümü';
turler = [
  'Tümü',
  'Gündem',
  'Eğitim',
  'Spor',
  'Ekonomi',
  'Magazin'
];

secilen() {
  console.log(this.selected);
}

}
