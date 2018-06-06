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

import com.revature.beans.Stats;
import com.revature.beans.Users;
import com.revature.service.StatsService;
import com.revature.service.UsersService;

@Controller("statsController")
@RequestMapping("/stats")
public class StatsController {

	@Autowired
	private StatsService statsService;

	@CrossOrigin
	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<Stats>> getAllUsers() {
		return new ResponseEntity<>(statsService.getStats(), HttpStatus.OK);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/byId/{id}", method = RequestMethod.GET)
	public ResponseEntity<Stats> getStatsByUser(@PathVariable int id) {
		ResponseEntity<Stats> resp = null;
		Stats stat = statsService.getStatByUserId(id);
		resp = new ResponseEntity<>(stat, HttpStatus.OK);
		return resp;
	}
	
	@CrossOrigin
	@RequestMapping(value = "/byUsername/{username}", method = RequestMethod.GET)
	public ResponseEntity<Stats> getStatsByUserName(@PathVariable String username) {
		ResponseEntity<Stats> resp = null;
		Stats stat = statsService.getStatsByUsername(username);
		resp = new ResponseEntity<>(stat, HttpStatus.OK);
		return resp;
	}
	
}
