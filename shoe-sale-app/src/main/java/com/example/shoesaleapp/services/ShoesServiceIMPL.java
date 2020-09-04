package com.example.shoesaleapp.services;

import com.example.shoesaleapp.models.Shoes;
import com.example.shoesaleapp.repositories.ShoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShoesServiceIMPL implements ShoesService {

    @Autowired
    private ShoesRepository shoesRepository;


    @Override
    public Iterable<Shoes> listShoes() {
      return shoesRepository.findAll();
    }

    @Override
    public Shoes sneaker(Shoes shoes) {
        return shoesRepository.save(shoes);
    }
}
