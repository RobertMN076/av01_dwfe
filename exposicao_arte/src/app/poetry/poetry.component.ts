import { Component, Input } from '@angular/core';
import { Poetry } from '../../models/poetry';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-poetry',
  standalone: true,
  imports: [NgFor],
  templateUrl: './poetry.component.html',
  styleUrl: './poetry.component.css'
})
export class PoetryComponent {
  @Input() poetry! : Poetry;
}
