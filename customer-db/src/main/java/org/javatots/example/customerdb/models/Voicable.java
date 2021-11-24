package org.javatots.example.customerdb.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Voicable {
    private String type;
    private int number;

    @Override
    public String toString() {
        return "Voicable{" +
                "type='" + this.type + '\'' +
                ", number=" + this.number +
                '}';
    }
}