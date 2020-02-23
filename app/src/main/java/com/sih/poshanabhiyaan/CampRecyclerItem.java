package com.sih.poshanabhiyaan;

public class CampRecyclerItem {

    private final String id;
    private final String title;
    private final String desc;

    CampRecyclerItem(String id, String title, String desc) {
        this.id = id;
        this.title = title;
        this.desc = desc;
    }

    public String getTitle() {
        return title;
    }

    public String getDesc() {
        return desc;
    }

    public String getId() {
        return id;
    }
}
