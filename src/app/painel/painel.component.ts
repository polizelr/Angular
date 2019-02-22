import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { frases } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

//a interface 'OnInit' viabiliza a inclusão de um método do ciclo de vida do componente
export class PainelComponent implements OnInit, OnDestroy {

  public frases1: Frase[] = frases
  public instrucao:string = 'Traduza a frase:'
  public resposta:string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3
  
  //faz a emissão de um evento
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value    
  }

  ngOnDestroy(){
  }


  public verificarResposta():void{
    
      if(this.rodadaFrase.frasePtBr.toUpperCase()==this.resposta.toUpperCase().trim()){
    
        //trocar pergunta da rodada
        this.rodada++

        //progresso
        this.progresso = this.progresso + (100/this.frases1.length)       
        if(this.rodada===4){
          this.encerrarJogo.emit('vitoria')
        }
        else{
           //atualiza o objeto
           this.atualizaRodada()
        }    
      }
      else{    
        this.tentativas--

        if(this.tentativas===-1){
          this.encerrarJogo.emit('derrota')
        }
          
        
      }    
   
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases1[this.rodada]
    this.resposta=''
  }


}
