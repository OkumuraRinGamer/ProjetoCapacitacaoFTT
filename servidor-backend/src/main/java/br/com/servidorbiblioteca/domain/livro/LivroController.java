package br.com.servidorbiblioteca.domain.livro;

import br.com.servidorbiblioteca.core.Controller.AbrastractController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/livro")
public class LivroController extends AbrastractController<Livro> {

}
