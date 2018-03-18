package com.ifmg.tcc.TADs;

import java.util.ArrayList;

public class DisciplinaData {

    ArrayList<Atividade> atividades;
    ArrayList<Arquivo> arquivos;
    ArrayList<Avaliacao> avaliacoes;
    String nome;
    String prof;
    String cargah;
    String status;
    int faltas;
    int aulas;

    public DisciplinaData(ArrayList<Atividade> atividades, ArrayList<Arquivo> arquivos, ArrayList<Avaliacao> avaliacoes, String nome, String prof, String cargah, String status, int faltas, int aulas) {
        this.atividades = atividades;
        this.arquivos = arquivos;
        this.avaliacoes = avaliacoes;
        this.nome = nome;
        this.prof = prof;
        this.cargah = cargah;
        this.status = status;
        this.faltas = faltas;
        this.aulas = aulas;
    }

    public ArrayList<Atividade> getAtividades() {
        return atividades;
    }

    public void setAtividades(ArrayList<Atividade> atividades) {
        this.atividades = atividades;
    }

    public ArrayList<Arquivo> getArquivos() {
        return arquivos;
    }

    public void setArquivos(ArrayList<Arquivo> arquivos) {
        this.arquivos = arquivos;
    }

    public ArrayList<Avaliacao> getAvaliacoes() {
        return avaliacoes;
    }

    public void setAvaliacoes(ArrayList<Avaliacao> avaliacoes) {
        this.avaliacoes = avaliacoes;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getProf() {
        return prof;
    }

    public void setProf(String prof) {
        this.prof = prof;
    }

    public String getCargah() {
        return cargah;
    }

    public void setCargah(String cargah) {
        this.cargah = cargah;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getFaltas() {
        return faltas;
    }

    public void setFaltas(int faltas) {
        this.faltas = faltas;
    }

    public int getAulas() {
        return aulas;
    }

    public void setAulas(int aulas) {
        this.aulas = aulas;
    }
}
