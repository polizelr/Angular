import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'

  //executado durante o processo de decoração dos valores recebidos de componentes pais para componentes filhos
  @Input() public tentativas: number 


  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]




  constructor() {

   }

  ngOnInit() {
  }

  //sempre quando existe input de dados ou quando os valores recebidos são alterados esse método é disparado
  ngOnChanges() {
    //sempre quando o atributo tentativa for alterado pela classe painel, pode-se capturar essa alteração e tomar uma ação
    if(this.tentativas != this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice-1].cheio = false


    }
  
  
  
  }

}
