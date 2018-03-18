package com.ifmg.tcc.TADs;

public class Avaliacao {
    String nome;
    String data;
    float nota;
    float valor;

    public Avaliacao(String nome, String data, float nota, float valor) {
        this.nome = nome;
        this.data = data;
        this.nota = nota;
        this.valor = valor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public float getNota() {
        return nota;
    }

    public void setNota(float nota) {
        this.nota = nota;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }
}
