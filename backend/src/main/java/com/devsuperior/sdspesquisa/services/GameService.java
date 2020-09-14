package com.devsuperior.sdspesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.sdspesquisa.dto.GameDTO;
import com.devsuperior.sdspesquisa.entities.Game;
import com.devsuperior.sdspesquisa.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository Repository;
	
	@Transactional(readOnly = true)
	public List<GameDTO> findAll() {
		List<Game> list = Repository.findAll();
		return list.stream().map(x -> new GameDTO(x)).collect(Collectors.toList());
	}
}
