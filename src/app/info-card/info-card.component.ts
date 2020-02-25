import { Component, OnInit, Input } from '@angular/core';
import { TeaUI } from '../models/tea.model';

@Component({
  selector: 'tea-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input()
  tea: TeaUI;

  constructor() {}

  ngOnInit() {}

  pause() {
    console.log('pause');
  }
}
