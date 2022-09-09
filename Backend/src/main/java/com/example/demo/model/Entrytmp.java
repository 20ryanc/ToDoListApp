package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Entrytmp {
    @JsonProperty("title")
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public Entrytmp(String title) {
        this.title = title;
    }

    public Entrytmp(){

    }
}
