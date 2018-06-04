package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.GameStates;
import com.revature.beans.Users;
import com.revature.repository.GameStatesRepository;

@Service(value="gameStatesService")
public class GameStatesService {
	
	@Autowired
	GameStatesRepository gr;
	
	public List<GameStates> getGameStates() {
		List<GameStates> gameStates = gr.getGameStates();
		GameStates g = new GameStates();
		int gId = gr.addGameState(g);
		System.out.println(gId);
		return gameStates;
	}

}
