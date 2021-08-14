import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from '../mocks/frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string = ""
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3

  constructor() {
       this.atualizaRodada()
    }

  ngOnInit(): void {
  }



 public atualizaResposta(res: Event): void {
   //para pegar evento digitado pelo usuario.
   this.resposta = (<HTMLInputElement>res.target).value
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert("A tradução está correta!")
       //trocar pergunta da rodada:
      this.rodada++
      //Barra de progresso
      this.progresso = this.progresso + (100/ this.frases.length)
      //atualiza o objeto rodadaFrase
      this.atualizaRodada()
    }else{
      //diminuir a variavel tentativas
      this.tentativas--

      if(this.tentativas === -1){
        alert('você perdeu todas as tentativas!')
        this.resposta = ''
      }
    }
  }

  atualizaRodada(): void {
    //define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }

}
