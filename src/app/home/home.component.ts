import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    this.niceDetector = this.niceDetector.substring(1);
    this.niceDetector = this.niceDetector.concat(this.key);
    if (this.niceDetector === "69") {
      this.nice = true;
    } else { this.nice = false; }
  }

  nice = false;
  niceDetector = "12";
  key!: string;
  apiLoaded = false;
  videoId = 'dQw4w9WgXcQ';

  constructor() { }

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
