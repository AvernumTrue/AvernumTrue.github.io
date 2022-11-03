import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomNumber!: number;
  procMessage!: string;
  allNumbers: number[] = [];
  allProcs: number[] = [];
  procChance!: number;
  failProcs: 0 = 0;
  successProcs: 0 = 0;
  averageProcs!: number;

  constructor() { }

  ngOnInit(): void {
    this.procChance = 50;
    // procChance is the minimum number as a percenatge to proc
  }

  genNumb() {
    this.randomNumber = Math.floor(Math.random() * 100);
    this.allNumbers.push(this.randomNumber);
    this.checkProc();
    this.averageProcs = Math.floor(this.successProcs / this.allProcs.length * 100);
  }

  checkProc() {
    if (this.randomNumber >= this.procChance)
      this.allProcs.push(1),
        this.failProcs -= 1
    else {
      this.allProcs.push(0);
      this.successProcs++;
    }
  }

  genHundredNumb() {
    var times = 100;
    for (var i = 0; i < times; i++) {
      this.genNumb();
    }
  }

}
