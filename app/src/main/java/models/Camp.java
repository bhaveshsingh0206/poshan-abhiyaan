package models;

import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Camp {

    @SerializedName("__id")
    private String id;

    private String name;
    private Date dateStart;
    private Date dateEnd;
    private String location;

    public String getId() {
        return id;
    }

    private String description;

    public String getName() {
        return name;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public Date getDateEnd() {
        return dateEnd;
    }

    public String getLocation() {
        return location;
    }

    public String getDescription() {
        return description;
    }
}
