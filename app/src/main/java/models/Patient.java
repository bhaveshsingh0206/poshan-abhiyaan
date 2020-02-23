package models;

import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Patient {

    @SerializedName("_id")
    private String id;

    public String getId() {
        return id;
    }

    private String name;
    private Double age;
    private String gender;
    private String email;
    private String password;
    private String status;
    private Date date;
    private Double phone;
    private Location location;
   private  PatientDose patientDose;

    public String getName() {
        return name;
    }

    public Double getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getStatus() {
        return status;
    }

    public Date getDate() {
        return date;
    }

    public Double getPhone() {
        return phone;
    }

    public Location getLocation() {
        return location;
    }

    public PatientDose getPatientDose() {
        return patientDose;
    }
}
