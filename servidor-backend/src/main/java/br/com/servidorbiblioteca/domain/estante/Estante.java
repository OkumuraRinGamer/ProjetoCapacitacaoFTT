package br.com.servidorbiblioteca.domain.estante;


import br.com.servidorbiblioteca.domain.livro.Livro;
import br.com.servidorbiblioteca.domain.secao.Secao;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import com.sun.istack.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

@Entity
@Table (name = "estante")
@Getter
@Setter
public class Estante implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    long id;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "nome")
    private String nome;

    @JsonIgnore
    @NotNull
    @JoinColumn(name = "secao_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Secao secao;

    @OneToMany(mappedBy = "estante", cascade = CascadeType.ALL)
    private List<Livro> livros;

}

