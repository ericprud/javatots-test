package org.javatots.example.customerdb.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Voicable {
    private String type;
    private int number;

    @Override
    public String toString() {
        return "Voicable{" +
                "type='" + type + '\'' +
                ", number=" + number +
                '}';
    }
    // getters and setters
}