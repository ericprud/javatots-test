package org.javatots.example.customerdb.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

import org.javatots.example.customerdb.Constants;

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
                "firstName='" + this.firstName + '\'' +
                ", lastName='" + this.lastName + '\'' +
                ", age=" + this.age +
                ", contacts=" + this.contacts +
                ", addresses=" + this.addresses +
                '}';
    }

    public boolean checkFoo(final String foo) {
        return Constants.Foo.equals(foo);
    }

    // getters and setters
}