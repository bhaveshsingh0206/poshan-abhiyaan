package com.sih.poshanabhiyaan;

import java.util.regex.Pattern;

public class Utility {
    public static final Pattern USERNAME_PATTERN = Pattern.compile("[a-zA-Z0-9]{2,}");
//    public static final Pattern PASSWORD_PATTERN = Pattern.compile("[a-zA-Z_][a-zA-Z0-9@#$&_]{2,}");
    public static final Pattern PASSWORD_PATTERN = Pattern.compile("[a-zA-Z0-9@#$&_]+");
    public static final Pattern PHONE_NUMBER_PATTERN = Pattern.compile("[0-9]{10}");

    public static final String BASE_URL = "https://poshan5.run-us-west2.goorm.io/";
}
