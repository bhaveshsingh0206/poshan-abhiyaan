package com.sih.poshanabhiyaan;

import models.DoseObject;
import models.LoginData;
import models.Patient;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface PoshanAbhiyaanMongoApi {

    @GET("doses")
    Call<DoseObject> getDoses();

    @POST("login-patient")
    Call<Patient> login(@Body LoginData login);

}
