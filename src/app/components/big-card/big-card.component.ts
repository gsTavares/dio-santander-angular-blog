import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() photo: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
