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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.CurrentHands;
import com.revature.beans.Stats;
import com.revature.beans.Users;
import com.revature.service.CurrentHandsService;

@Controller("currentHandsController")
@RequestMapping("/currentHands")
public class CurrentHandsController {

	@Autowired
	private CurrentHandsService currentHandsService;

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
	
	
	@GetMapping("/getGameState/{userId}")
	@ResponseBody
	public ResponseEntity<String> getGameState(@RequestParam int userId) {
		CurrentHands c = currentHandsService.getCurrentHandById(userId);
		
		StringBuilder s = new StringBuilder();
		s.append("{ \"user\" : ");
		s.append(c)
		
		
		
		return new ResponseEntity<>(currentHandsService.getCurrentHands(), HttpStatus.OK);
	}
}

{
	"user" : {"username" : "username", "status" : "status", ...}
}














