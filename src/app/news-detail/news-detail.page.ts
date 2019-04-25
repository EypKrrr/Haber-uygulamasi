import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AllNews} from '../mock-news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  selectedID = null;
  news = AllNews;
  liked = false;
  disliked = false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedID = this.activatedRoute.snapshot.paramMap.get('selectedID');
    this.selectedID--;
    if (this.news[this.selectedID].userviewed === false) {
      this.news[this.selectedID].views++;
      this.news[this.selectedID].userviewed = true;
    }
    if (this.news[this.selectedID].userliked === true || this.news[this.selectedID].userdisliked === true) {
      this.liked = true;
      this.disliked = true;
    }
  }

  like() {
    this.news[this.selectedID].liked++;
    this.liked = true;
    this.disliked = true;
    this.news[this.selectedID].userliked = true;
  }

  dislike() {
    this.news[this.selectedID].disliked++;
    this.disliked = true;
    this.liked = true;
    this.news[this.selectedID].userdisliked = true;
  }

}
