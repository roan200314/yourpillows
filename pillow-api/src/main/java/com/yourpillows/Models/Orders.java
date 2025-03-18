package com.yourpillows.Models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "orders")
@Data
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
