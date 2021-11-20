package org.javatots.example.customerdb.models;

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
                "type='" + this.type + '\'' +
                ", line='" + this.line + '\'' +
                ", city='" + this.city + '\'' +
                ", state='" + this.state + '\'' +
                ", zip=" + this.zip +
                ", siteContacts=" + this.siteContacts +
                '}';
    }
// getters and setters
}