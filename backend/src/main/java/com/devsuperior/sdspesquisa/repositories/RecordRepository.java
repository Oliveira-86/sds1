package com.devsuperior.sdspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.sdspesquisa.entities.Genre;

public interface RecordRepository extends JpaRepository<Genre, Long>{

}
