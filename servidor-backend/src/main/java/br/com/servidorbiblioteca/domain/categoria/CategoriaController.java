package br.com.servidorbiblioteca.domain.categoria;

import br.com.servidorbiblioteca.core.Controller.AbrastractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categoria")
public class CategoriaController extends AbrastractController<Categoria> {
}
