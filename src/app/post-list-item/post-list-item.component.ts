import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() MyDate: Date;
  @Input() likes: number;
  constructor() { }

  ngOnInit() {
  }
  addLikes(){
    this.likes++
  }

  decreaseLikes(){
    this.likes--;
  }

}
