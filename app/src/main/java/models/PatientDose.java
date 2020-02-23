package models;

import java.util.Date;

public class PatientDose {

    private Dose dose;
    private Date dateStart;
    private Date dateEnd;

    public Dose getDose() {
        return dose;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public Date getDateEnd() {
        return dateEnd;
    }
}
