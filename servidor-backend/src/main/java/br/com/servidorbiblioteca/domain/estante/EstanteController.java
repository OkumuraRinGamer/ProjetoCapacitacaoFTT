package br.com.servidorbiblioteca.domain.estante;

import br.com.servidorbiblioteca.core.Controller.AbrastractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/estante")
public class EstanteController extends AbrastractController<Estante> {
}
