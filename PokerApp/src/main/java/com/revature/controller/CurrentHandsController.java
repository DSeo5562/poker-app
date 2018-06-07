package com.revature.controller;

import java.util.ArrayList;
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

import com.revature.beans.CurrentHands;
import com.revature.beans.FullGameState;
import com.revature.beans.Users;
import com.revature.service.CurrentHandsService;
import com.revature.service.UsersService;

@Controller("currentHandsController")
@RequestMapping("/currentHands")
public class CurrentHandsController {

	@Autowired
	private CurrentHandsService currentHandsService;
	
	@Autowired
	private UsersService usersService;

	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<CurrentHands>> getAllUsers() {
		return new ResponseEntity<>(currentHandsService.getCurrentHands(), HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/byUsername/{username}", method = RequestMethod.GET)
	public ResponseEntity<CurrentHands> getStatsByUser(@PathVariable String username) {
		ResponseEntity<CurrentHands> resp = null;
		CurrentHands currentHand = currentHandsService.getCurrentHandByUsername(username);
		resp = new ResponseEntity<>(currentHand, HttpStatus.OK);
		return resp;
	}
	
	@GetMapping("/getFullGameState/{userId}")
	@ResponseBody
	public ResponseEntity<FullGameState> getGameState(@PathVariable int userId) {
		CurrentHands user = currentHandsService.getCurrentHandById(userId);
		int gameId = user.getUser().getGameStates().getGame_Id();
		List<Users> otherplayersUsers = usersService.getUsersWithGameId(gameId);
		
		List<CurrentHands> otherplayers = new ArrayList<>();
		for(Users u : otherplayersUsers) {
			if(u.getuserId() != user.getUser().getuserId()) {
				otherplayers.add(currentHandsService.getCurrentHandByUsername(u.getUsername()));
			}
	}
		
		FullGameState game = new FullGameState(user,otherplayers,user.getUser().getGameStates().getTableState());
			
		return new ResponseEntity<>(game, HttpStatus.OK);
	}
}
