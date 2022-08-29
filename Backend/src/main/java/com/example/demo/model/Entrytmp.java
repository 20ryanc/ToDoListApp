package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Entrytmp {
    @JsonProperty("title")
    private String title;
    @JsonProperty("content")
    private String content;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Entrytmp(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
