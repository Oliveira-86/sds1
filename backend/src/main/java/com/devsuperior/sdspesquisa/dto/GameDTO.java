package com.devsuperior.sdspesquisa.dto;

import java.io.Serializable;

import com.devsuperior.sdspesquisa.entities.Game;
import com.devsuperior.sdspesquisa.entities.enums.Platform;

public class GameDTO implements Serializable{
	private static final long serialVersionUID = 1L; 

	private Long id;
	private String name;
	private Platform platform;
	
	public GameDTO() {
	}
	
	public GameDTO(Game entity) {
		id = entity.getId();
		name = entity.getName();
		platform = entity.getPlatform();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}
	
	
}
