package com.example.shoesaleapp.Controllers;

import com.example.shoesaleapp.models.Shoes;
import com.example.shoesaleapp.services.ShoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Shoes")
public class ShoesController {

    @Autowired
    private ShoesService shoesService;

    @GetMapping
    public Iterable<Shoes> listShoes() {
        return shoesService.listShoes();
    }
   @PostMapping
    public Shoes jordans(@RequestBody Shoes shoes){
        return shoesService.sneaker(shoes);
   }
}
