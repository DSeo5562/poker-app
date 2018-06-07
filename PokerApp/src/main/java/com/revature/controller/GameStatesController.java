package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.GameStates;
import com.revature.beans.Stats;
import com.revature.service.GameStatesService;

@Controller("gameStatesController")
@RequestMapping("/gameStates")
public class GameStatesController {
	
	@Autowired
	private GameStatesService gameStatesService;

	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<GameStates>> getAllGameStates() {
		return new ResponseEntity<>(gameStatesService.getGameStates(), HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/byId/{id}", method = RequestMethod.GET)
	public ResponseEntity<GameStates> getStatsByUser(@PathVariable int id) {
		ResponseEntity<GameStates> resp = null;
		GameStates gameState = gameStatesService.getGameStatesById(id);
		resp = new ResponseEntity<>(gameState, HttpStatus.OK);
		return resp;
	}

}
