package com.devsuperior.sdspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.sdspesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}
