import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pseudoMultiplier: number = 1;
  randomNumber!: number;
  procMessage!: string;
  // allProcs: number[] = [];
  baseProcChance: number = 50;
  procChance!: number;
  allSuccessProcs: number = 0;
  lastFewSuccessProcs: number = 0;
  averageOfAllProcs!: number;
  lastFewProcs: string[] = [];
  averageOfLastFewProcs!: number;
  totalNumbersGenerated: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.procChance = this.baseProcChance;
  }

  execute() {
    this.genNumber();
    this.checkProc();
    this.totalNumbersGenerated++;

    this.averageOfAllProcs = Math.floor(this.allSuccessProcs / this.totalNumbersGenerated * 100);
    this.averageOfLastFewProcs = Math.floor(this.lastFewSuccessProcs / this.lastFewProcs.length * 100);
    this.procChance = this.baseProcChance + (this.baseProcChance - this.averageOfLastFewProcs) * this.pseudoMultiplier;
    // this.procChance = this.baseProcChance * this.pseudoMultiplier;

    this.checkLastFewNumbers();
  }

  checkLastFewNumbers() {
    if (this.lastFewProcs.length > 10)
      this.lastFewProcs.shift();
  }

  genNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
  }

  checkProc() {
    if (this.randomNumber < this.procChance) {
      this.allSuccessProcs++;
      this.lastFewSuccessProcs++;
      this.lastFewProcs.push("Proc!");
    } else {
      this.lastFewSuccessProcs--;
      this.lastFewProcs.push("No Proc");
    }
  }

  executeTimes(times: number) {
    for (let i = 0; i < times; i++) {
      this.execute();
    }
  }

  // TODO: Add way to reset?
  // reset() {
  // }

}
