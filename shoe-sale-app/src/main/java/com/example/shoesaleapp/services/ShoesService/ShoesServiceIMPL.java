package com.example.shoesaleapp.services.ShoesService;

import com.example.shoesaleapp.models.Shoes;
import com.example.shoesaleapp.repositories.ShoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service;
@ArmorServiceIMPL
public class ShoesServiceIMPL implements ShoesService {

    @Autowired
    private ShoesRepository shoesRepository;



}
