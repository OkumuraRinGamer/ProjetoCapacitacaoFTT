import Livro from '../livro/livro';
import Secao from '../secao/secao';

export default class Estante {
  id: number;
  nome: string;
  secao: Secao;
  livro: Livro;
}
