package br.com.servidorbiblioteca.domain.secao;

import br.com.servidorbiblioteca.core.Controller.AbrastractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/secao")
public class SecaoController extends AbrastractController<Secao> {
}
