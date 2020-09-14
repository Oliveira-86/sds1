package com.devsuperior.sdspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.sdspesquisa.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
