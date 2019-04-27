import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NewsService} from '../news.service';
import {News} from '../news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  selectedId;
  liked = 0;
  disliked = 0;
  selectedNews: News[];

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) {

   }


  ngOnInit() {
    this.selectedId = this.activatedRoute.snapshot.paramMap.get('selectedID');
    console.log('selected id=', this.selectedId);
    this.getNews();


    if (this.selectedNews[0].userviewed === 0) {
      this.selectedNews[0].views++;
      this.selectedNews[0].userviewed = 1;
    }
    if (this.selectedNews[0].userliked === 1 || this.selectedNews[0].userdisliked === 1) {
      this.liked = 1;
      this.disliked = 1;
    }

  }



  getNews(): void {
    this.newsService.getNewsById(this.selectedId)
    .subscribe(sNews => this.selectedNews = sNews);
  }


  like() {
    this.selectedNews[0].liked++;
    this.liked = 1;
    this.disliked = 1;
    this.selectedNews[0].userliked = 1;
    console.log(this.selectedNews[0].liked);
  }

  dislike() {
    this.selectedNews[0].disliked++;
    this.disliked = 1;
    this.liked = 1;
    this.selectedNews[0].userdisliked = 1;
  }

}
