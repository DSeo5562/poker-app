package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.GameStates;
import com.revature.service.GameStatesService;

@Controller("usersController")
@RequestMapping("/users")
public class GameStatesController {
	
	@Autowired
	private GameStatesService gameStatesService;

	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<GameStates>> getAllGameStates() {
		return new ResponseEntity<>(gameStatesService.getGameStates(), HttpStatus.OK);
	}

}
