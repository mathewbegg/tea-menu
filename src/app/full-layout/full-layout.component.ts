import { Component, OnInit } from '@angular/core';
import { TeaService } from '../tea.service';
import { TeaUI } from '../models/tea.model';

@Component({
  selector: 'tea-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  teas: TeaUI[];

  constructor(private teaService: TeaService) {}

  ngOnInit() {
    this.teaService.getTeas().subscribe({
      next: value => (this.teas = value),
      error: err => console.error(err),
    });
  }
}
