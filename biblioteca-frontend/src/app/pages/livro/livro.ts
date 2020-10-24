import Categoria from '../categoria/categoria';
import Estante from '../estante/estante';

export default class Livro {
  id: Number;
  titulo: String;
  autor: String;
  isbn: String;
  categoria: Categoria;
  estantes: Estante;
}
