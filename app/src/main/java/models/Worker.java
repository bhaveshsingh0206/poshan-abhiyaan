package models;

import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Worker {

    @SerializedName("__id")
    private String id;

    private String name;
    private String username;
    private String password;
    private Date date;

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public Date getDate() {
        return date;
    }
}
