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
  totalNumbersGenerated: number = 0;
  test!: number;

  constructor() { }

  ngOnInit(): void {
    this.procChance = 50;
  }

  genNumb() {
    this.test = Math.random();
    console.log(this.test);
    this.randomNumber = Math.floor(Math.random() * 100);
    this.allNumbers.push(this.randomNumber);
    this.checkProc();
    this.averageProcs = Math.floor(this.successProcs / this.allProcs.length * 100);
    this.totalNumbersGenerated = this.allProcs.length;
  }

  checkProc() {
    if (this.randomNumber <= this.procChance)
      this.allProcs.push(1)
    // this.failProcs++; Do I even need this??
    else {
      this.allProcs.push(0);
      this.successProcs++;
    }
  }

  // TODO: Add way to let user choose any(?) number of random numbers
  genTenNumb() {
    var times = 10;
    for (var i = 0; i < times; i++) {
      this.genNumb();
    }
  }

  genHundredNumb() {
    var times = 100;
    for (var i = 0; i < times; i++) {
      this.genNumb();
    }
  }

  genThousandNumb() {
    var times = 1000;
    for (var i = 0; i < times; i++) {
      this.genNumb();
    }
  }

  // TODO: Add way to reset
  // reset() {
  // }

}
