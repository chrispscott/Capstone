package com.example.shoesaleapp.models;
import javax.persistence.*;

@Entity
@Table(name = "Shoes")
public class Shoes {


    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String shoebrand;

    @Column
    private String shoeprice;

    public Shoes() {}

    public String getShoebrand() {
        return shoebrand;
    }

    public void setShoebrand(String shoebrand) {
        this.shoebrand = shoebrand;
    }

    public String getShoeprice() {
        return shoeprice;
    }

    public void setShoeprice(String shoeprice) {
        this.shoeprice = shoeprice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
