package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.GameStates;
import com.revature.beans.Users;
import com.revature.repository.GameStatesRepository;
import com.revature.repository.UsersRepository;

@Service(value="gameStatesService")
public class GameStatesService {
	
	@Autowired
	GameStatesRepository gr;
	
	public void addGameState(GameStates g) {
		gr.addGameState(g);
	}
	
	public GameStates getUserById(int id) {
		GameStates g = gr.getGameStateById(id);
		return g;
	}
	
	public List<GameStates> getGameStates() {
		List<GameStates> gameStates = gr.getGameStates();
		return gameStates;
	}
	
	public void updateGameState(GameStates g) {
		gr.updateGameState(g);
	}
	
	public void deleteGameState(GameStates g) {
		gr.deleteGameState(g);
	}

}
