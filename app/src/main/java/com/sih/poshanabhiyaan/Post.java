package com.sih.poshanabhiyaan;

import com.google.gson.annotations.SerializedName;

public class Post {

    private int userId;

    private Integer id;
    private String title;

    @SerializedName("body")
    private String desc;

    public Post(int userId, String title, String desc) {
        this.userId = userId;
        this.title = title;
        this.desc = desc;
    }

    public int getUserId() {
        return userId;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDesc() {
        return desc;
    }
}
