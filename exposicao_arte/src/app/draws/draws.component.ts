import { Component, Input } from '@angular/core';
import { Draw } from '../../models/draws';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-draws',
  standalone: true,
  imports: [NgFor],
  templateUrl: './draws.component.html',
  styleUrl: './draws.component.css'
})
export class DrawsComponent {
 @Input() draw! : Draw;
}
