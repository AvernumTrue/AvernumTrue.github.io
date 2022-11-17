import { Component, OnInit } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
  }

}
