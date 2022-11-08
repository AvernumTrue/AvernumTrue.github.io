import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomNumber!: number;
  procMessage!: string;
  procChance!: number;
  allSuccessProcs: number = 0;
  recentSuccessProcs: number = 0;
  averageOfAllProcs!: number;
  recentProcs: string[] = [];
  averageOfRecentProcs!: number;
  totalNumbersGenerated: number = 0;
  procChanceGoal: number = 20;
  procChanceVarianceMultiplier: number = 3;

  constructor() { }

  ngOnInit(): void {
    this.procChance = this.procChanceGoal;

  }

  execute() {
    this.genNumber();
    this.checkProc();
    this.totalNumbersGenerated++;
    this.averageOfAllProcs = this.allSuccessProcs / this.totalNumbersGenerated * 100;
    this.averageOfRecentProcs = this.recentSuccessProcs / this.recentProcs.length * 100;
    this.checkLastFewNumbers();
  }

  checkLastFewNumbers() {
    if (this.recentProcs.length > 10) {
      this.recentProcs.shift();
    }

    // TODO: FIX THIS

    this.recentProcs.forEach(element => {
      if (element === "Proc!") {
        this.recentSuccessProcs++;
      } else {
        this.recentSuccessProcs--;
      }
    }
    );
  }

  genNumber() {
    this.randomNumber = Math.floor(Math.random() * 100);
  }

  checkProc() {
    if (this.randomNumber < this.procChance) {
      this.procChance -= (100 - this.procChanceGoal) * 0.01 * this.procChanceVarianceMultiplier;
      this.allSuccessProcs++;
      this.recentProcs.push("Proc!");
    } else {
      this.procChance += this.procChanceGoal * 0.01 * this.procChanceVarianceMultiplier;
      this.recentProcs.push("No Proc");
    }
  }

  executeTimes(times: number) {
    for (let i = 0; i < times; i++) {
      this.execute();
    }
  }

  // TODO: Add way to reset?
  reset() {

    this.allSuccessProcs = 0;
    this.recentSuccessProcs= 0;
    this.recentProcs = [];
    this.totalNumbersGenerated= 0;
    this.procChanceGoal = 20;
    this.procChanceVarianceMultiplier = 3;
  }

}
