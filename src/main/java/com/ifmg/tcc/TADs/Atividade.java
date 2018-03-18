package com.ifmg.tcc.TADs;

public class Atividade {
    private String nome;
    private float valor;
    private String data;
    private String codigo;

    public Atividade(String nome, float valor, String data, String codigo) {
        this.nome = nome;
        this.valor = valor;
        this.data = data;
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
}
