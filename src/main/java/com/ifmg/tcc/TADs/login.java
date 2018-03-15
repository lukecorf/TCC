package com.ifmg.tcc.TADs;

public class login {
    private String code;
    private String password;

    public login(String code, String password) {
        this.code = code;
        this.password = password;
    }

    public login (){

    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
