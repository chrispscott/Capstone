package com.example.shoesaleapp.repositories;

import com.example.shoesaleapp.models.Shoes;
import org.springframework.data.repository.CrudRepository;

public interface ShoesRepository extends CrudRepository<Shoes, Long> {
}
