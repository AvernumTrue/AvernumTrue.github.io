import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-psudo-rng',
  templateUrl: './psudo-rng.component.html',
  styleUrls: ['./psudo-rng.component.css']
})
export class PsudoRNGComponent implements OnInit {

  inputForm!: UntypedFormGroup;
  randomNumber!: number;
  procMessage!: string;
  procChance!: number;
  allSuccessProcs: number = 0;
  recentSuccessProcs: number = 0;
  averageOfAllProcs!: number;
  recentProcs: string[] = [];
  averageOfRecentProcs!: number;
  totalNumbersGenerated: number = 0;
  procChanceGoal: number = 50;
  procChanceVarianceMultiplier: number = 10;

  constructor(
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.procChance = this.procChanceGoal;
    this.createForm();
  }

  createForm(): void {

    this.inputForm = this.fb.group({
      procChanceGoal: [this.procChanceGoal ?? '', [Validators.required, Validators.min(1), Validators.max(99)]],
      procChanceVarianceMultiplier: [this.procChanceVarianceMultiplier ?? '', [Validators.required, Validators.min(1), Validators.max(99)]],
    });
  }

  submit() {
    if (this.inputForm.status === 'VALID') {
    }
    this.procChanceGoal = this.inputForm.get('procChanceGoal')?.value;
    this.procChanceVarianceMultiplier = this.inputForm.get('procChanceVarianceMultiplier')?.value;
    this.inputForm.markAllAsTouched();
  }

  execute() {
    this.genNumber();
    this.checkProc();
    this.totalNumbersGenerated++;
    this.averageOfAllProcs = this.allSuccessProcs / this.totalNumbersGenerated * 100;
    this.checkLastFewNumbers();
    console.log(this.procChanceVarianceMultiplier)
  }

  checkLastFewNumbers() {
    if (this.recentProcs.length > 10) {
      this.recentProcs.shift();
    }

    this.recentSuccessProcs = 0;
    this.recentProcs.forEach(element => {
      if (element === "Proc!") {
        this.recentSuccessProcs++;
      }
    }
    );
    this.averageOfRecentProcs = this.recentSuccessProcs / this.recentProcs.length * 100;
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

  reset() {
    this.procChance = this.procChanceGoal;
    this.allSuccessProcs = 0;
    this.recentSuccessProcs = 0;
    this.recentProcs = [];
    this.totalNumbersGenerated = 0;
    this.procChanceGoal = 50;
    this.procChanceVarianceMultiplier = 10;
  }

}

