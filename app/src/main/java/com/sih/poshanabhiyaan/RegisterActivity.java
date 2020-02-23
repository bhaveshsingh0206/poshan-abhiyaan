package com.sih.poshanabhiyaan;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.textfield.TextInputLayout;

import models.LoginData;
import models.Patient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RegisterActivity extends AppCompatActivity {

    private String TAG = "LOGIN_ACTIVITY";

    private Button loginButton;

    private TextInputLayout loginTextInputUsername;
    private TextInputLayout loginTextInputPassword;

    private PoshanAbhiyaanMongoApi poshanAbhiyaanMongoApi;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        init();

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!validateUsername(loginTextInputUsername) || !validatePassword(loginTextInputPassword))
                    return;

                final String username = loginTextInputUsername.getEditText().getText().toString().trim();
                final String password = loginTextInputPassword.getEditText().getText().toString().trim();

                LoginData loginData = new LoginData(username, password);

                Call<Patient> call = poshanAbhiyaanMongoApi.login(loginData);

                call.enqueue(new Callback<Patient>() {
                    @Override
                    public void onResponse(Call<Patient> call, Response<Patient> response) {
                        if (!response.isSuccessful()) {
                            Log.d(TAG, "onResponse: Error:" + response.body());
                            return;
                        }
                        Patient user = response.body();

                        Intent intent = new Intent(RegisterActivity.this, MainActivity.class);
                        startActivity(intent);
                        finish();

                    }

                    @Override
                    public void onFailure(Call<Patient> call, Throwable t) {
                        Log.d(TAG, "onFailure: " + t.getMessage());
                    }
                });
            }
        });

    }

    private boolean validateUsername(TextInputLayout input) {
        if (input.getEditText().getText() == null || input.getEditText().getText().equals("")) {
            input.setError("Username cannot be empty");
            return false;
        } else if (input.getEditText().getText().toString().trim().isEmpty() || input.getEditText().getText().toString().trim().equals("")) {
            input.setError("Username cannot be empty");
            return false;
        } else if (!Utility.USERNAME_PATTERN.matcher(input.getEditText().getText().toString().trim()).matches()) {
            input.setError("Invalid Username");
            return false;
        } else {
            input.setError(null);
            return true;
        }

    }

    private boolean validatePhoneNumber(TextInputLayout input) {
        if (input.getEditText().getText() == null || input.getEditText().getText().equals("")) {
            input.setError("Phone number cannot be empty");
            return false;
        } else if (input.getEditText().getText().toString().trim().isEmpty() || input.getEditText().getText().toString().trim().equals("")) {
            input.setError("Phone number cannot be empty");
            return false;
        } else if (!Utility.PHONE_NUMBER_PATTERN.matcher(input.getEditText().getText().toString().trim()).matches()) {
            input.setError("Invalid Phone number");
            return false;
        } else {
            input.setError(null);
            return true;
        }
    }

    private boolean validatePassword(TextInputLayout input) {
        if (input.getEditText().getText() == null || input.getEditText().getText().equals("")) {
            input.setError("Invalid Password");
            return false;
        } else if (input.getEditText().getText().toString().trim().isEmpty() || input.getEditText().getText().toString().trim().equals("")) {
            input.setError("Invalid Password");
            return false;
        } else if (!Utility.PASSWORD_PATTERN.matcher(input.getEditText().getText().toString().trim()).matches()) {
            input.setError("Password must be atleast 6 characters long.");
            return false;
        } else {
            input.setError(null);
            return true;
        }
    }


    private void init() {

        // Login

        loginTextInputUsername = findViewById(R.id.login_text_input_username);
        loginTextInputPassword = findViewById(R.id.login_text_input_password);

        loginButton = findViewById(R.id.login_button);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(Utility.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        poshanAbhiyaanMongoApi = retrofit.create(PoshanAbhiyaanMongoApi.class);
    }
}
