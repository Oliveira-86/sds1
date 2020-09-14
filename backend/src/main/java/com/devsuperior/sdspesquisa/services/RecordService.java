package com.devsuperior.sdspesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.sdspesquisa.dto.RecordDTO;
import com.devsuperior.sdspesquisa.dto.RecordInsertDTO;
import com.devsuperior.sdspesquisa.entities.Game;
import com.devsuperior.sdspesquisa.entities.Record;
import com.devsuperior.sdspesquisa.repositories.GameRepository;
import com.devsuperior.sdspesquisa.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		return new RecordDTO(entity);
	}
	

}
