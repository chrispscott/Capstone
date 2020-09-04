package com.example.shoesaleapp.services;

import com.example.shoesaleapp.models.Shoes;
import com.example.shoesaleapp.repositories.ShoesRepository;

public interface ShoesService {

   public Iterable<Shoes> listShoes();
  public Shoes sneaker(Shoes shoes);
}

