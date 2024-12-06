import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { PoetryComponent } from "../poetry/poetry.component";
import { DrawsComponent } from "../draws/draws.component";
import { Poetry } from '../../models/poetry';
import { NgFor } from '@angular/common';
import { Draw } from '../../models/draws';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AboutMeComponent, PoetryComponent, DrawsComponent, NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  buttonText: string = 'white'
  buttonColor: string = '#009d94'
  poetrys : Poetry[] = [
    new Poetry('/uma_conversa.jpeg', 'Poesias'),
    new Poetry('/molhados.jpeg', 'Poesias'),
    new Poetry('/perdicao.jpeg', 'Poesias'),
    new Poetry('/poeti.jpeg', 'Poesias'),
    new Poetry('/sem-titulo.jpeg', 'Poesias'),
    new Poetry('/validacoes.jpeg', 'Poesias'),
  ]
  draws : Draw[] = [
    new Draw('/flor.jpeg', 'Desenhos'),
    new Draw('/flor02.jpeg', 'Desenhos'),
    new Draw('/baralhow.jpeg', 'Desenhos'),
    new Draw('/rosa.jpeg', 'Desenhos'),
    new Draw('/smoke.jpeg', 'Desenhos'),
    new Draw('/applehead.jpeg', 'Desenhos'),
  ]

  mouseOnButton() {
    if(this.buttonColor === '#009d94'){
      this.buttonColor = "#006661"
    }
  }

  mouseOutButton() {
    if(this.buttonColor === '#006661'){
      this.buttonColor = '#009d94'
    }
  }
}
