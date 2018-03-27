package com.ifmg.tcc.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DisciplinaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int code;
    private String nome;
    private int cargaH;
    private String status;
    private int faltas;
    private int aulas;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getCargaH() {
        return cargaH;
    }

    public void setCargaH(int cargaH) {
        this.cargaH = cargaH;
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
