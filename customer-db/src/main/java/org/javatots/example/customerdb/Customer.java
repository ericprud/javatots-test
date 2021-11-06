package org.javatots.example.customerdb;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class Customer {

    private String firstName;
    private String lastName;
    private int age;
    private List<Voicable> contacts;
    private Map<String, Address> addresses;

    @Override
    public String toString() {
        return "Customer{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", contacts=" + contacts +
                ", addresses=" + addresses +
                '}';
    }

    // getters and setters
}