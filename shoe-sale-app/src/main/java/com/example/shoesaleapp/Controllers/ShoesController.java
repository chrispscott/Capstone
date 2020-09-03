package com.example.shoesaleapp.Controllers;

import com.example.shoesaleapp.models.Shoes;
import com.example.shoesaleapp.repositories.ShoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Shoes")
public class ShoesController {

    @Autowired
    private ShoesService shoesService;

    @GetMapping(“/Shoes”)
    public Iterable<Shoes> listShoes() {
        return ShoesService.listShoes();
    }

}
