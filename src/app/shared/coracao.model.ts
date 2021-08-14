export class Coracao {
    coracao: string
    constructor(
       public cheio: boolean,
       public urlCoracaoCheio: string = '../../assets/coracao_cheio.png',
       public urlCoracaoVazio: string = '../../assets/coracao_vazio.png'
    ){}

    /**
     * Logica das tentativas animação coração cheio ou vazio
     */
    public exibeCoracao(): string {
      this.cheio ? this.coracao = this.urlCoracaoCheio : this.coracao = this.urlCoracaoVazio;
      return this.coracao
    }
}
