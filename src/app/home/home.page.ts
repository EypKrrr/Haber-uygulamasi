import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {News} from '../news';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
AllNews: News[];

url = 'http://192.168.1.26:4000/images/haber1.jpg';

selected = 'TÜMÜ';
turler = [
  'TÜMÜ',
  'GÜNDEM',
  'EĞİTİM',
  'SPOR',
  'EKONOMİ',
  'MAGAZİN'
];



constructor(private newsService: NewsService) {}

ngOnInit() {
  this.getNews();
}

getNews(): void {
  this.newsService.getAllNews()
  .subscribe(allNews => this.AllNews = allNews);
}

secilen() {
  console.log(this.selected);
}



}
