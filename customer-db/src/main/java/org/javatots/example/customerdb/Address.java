package org.javatots.example.customerdb;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Address {
    private String type;

    private String line;
    private String city;
    private String state;
    private Integer zip;
    private List<Voicable> siteContacts;

    @Override
    public String toString() {
        return "Address{" +
                "type='" + type + '\'' +
                ", line='" + line + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip=" + zip +
                ", siteContacts=" + siteContacts +
                '}';
    }
// getters and setters
}