import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PoetryComponent } from './poetry/poetry.component';
import { DrawsComponent } from './draws/draws.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, BodyComponent, FooterComponent, AboutMeComponent, PoetryComponent, DrawsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exposicao_arte';
}
