import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  corDoBotao: string = "#009d94"
  colorText: string = 'white'

  showInfo = false;
  infoText = 'Olá, me chamo Robert, tenho 22 anos e não faz muito tempo que comecei a escrever poesias. Me aproximei da escrita em 2018, mas em 2019 que realmente passei a amar a arte da poesia, desde então isso se tornou parte de mim e não me vejo vivendo sem a escrita. Eu geralmente escrevia sobre contextos e sentimentos pessoais meus, porém com o passar do tempo fui conseguindo colocar no papel tudo que me rodeava, abrangendo meus horizontes de escrita e aprimorando minha capacidade de captar emoções e contextos de pessoas alheias. Atualmente eu estudo programação, mais especificamente faço TSI (Tecnologia em Sistemas para Internet), como sendo uma ferramenta de extensão para minha criatividade. Sou completamente apaixonado por criar coisas e de estar em âmbitos onde minha criatividade possa ser explorada livremente.'

  toggleInfo(){
    this.showInfo = !this.showInfo
  }

  mousePorCima(){
    if(this.corDoBotao === '#009d94'){
      this.corDoBotao = '#006661'
    }
  }

  mouseSaiu(){
    if(this.corDoBotao === '#006661'){
      this.corDoBotao = '#009d94'
    }
  }
}
