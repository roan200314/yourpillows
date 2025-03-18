package com.yourpillows.DTO;

import lombok.Data;

@Data
public class OrdersDTO {
    private String email;
    private boolean newsletter;
    private String country;
    private String firstName;
    private String lastName;
    private String company;
    private String street;
    private String houseNumber;
    private String postalcode;
    private String city;
    private String phone;
    private boolean smsOffers;
    private double totalPrice;
}
