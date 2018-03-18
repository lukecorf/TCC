package com.ifmg.tcc.TADs;

public class Arquivo {
    String link;
    String nome;
    String tamanho;

    public Arquivo(String link, String nome, String tamanho) {
        this.link = link;
        this.nome = nome;
        this.tamanho = tamanho;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }
}
