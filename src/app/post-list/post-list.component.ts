import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() MyDate: Date;
  @Input() likes: number;
  constructor() {
    console.log(this.likes);
  }

  ngOnInit() {
  }
  addLikes(){
    this.likes++
    console.log(this.likes);
  }

  decreaseLikes(){
    this.likes--;
    console.log(this.likes);
  }


}
