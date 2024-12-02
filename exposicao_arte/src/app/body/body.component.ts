import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { PoetryComponent } from "../poetry/poetry.component";
import { DrawsComponent } from "../draws/draws.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AboutMeComponent, PoetryComponent, DrawsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
