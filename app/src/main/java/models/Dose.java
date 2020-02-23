package models;

import com.google.gson.annotations.SerializedName;

public class Dose {

    @SerializedName("__id")
    private String id;

    private String name;
    private Double duration;
    private String status;
    private String description;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Double getDuration() {
        return duration;
    }

    public String getStatus() {
        return status;
    }

    public String getDescription() {
        return description;
    }
}
