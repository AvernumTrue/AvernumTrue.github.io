import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pseudoMultiplier: number = 100;
  randomNumber!: number;
  procMessage!: string;
  allNumbers: number[] = [];
  allProcs: number[] = [];
  baseProcChance: number = 50;
  procChance!: number;
  successProcs: 0 = 0;
  averageProcs!: number;

  constructor() { }

  ngOnInit(): void {
    this.procChance = this.baseProcChance;
  }

  execute() {
    this.genNum();
    this.checkProc();
  }

  genNum() {
    this.randomNumber = Math.floor(Math.random() * 100);
    this.allNumbers.push(this.randomNumber);
  }

  checkProc() {
    if (this.randomNumber < this.baseProcChance) {
      this.allProcs.push(1);
    } else {
      this.allProcs.push(0);
      this.successProcs++;
    }
    this.averageProcs = Math.floor(this.successProcs / this.allProcs.length * 100);
    this.procChance = this.baseProcChance + (this.baseProcChance - this.averageProcs) * this.pseudoMultiplier;
  }

  executeTimes(times: number) {
    for (let i = 0; i < times; i++) {
      this.execute();
    }
  }

  // TODO: Add way to reset
  // reset() {
  // }

}
