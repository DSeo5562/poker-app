package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.CurrentHands;
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
	
}
