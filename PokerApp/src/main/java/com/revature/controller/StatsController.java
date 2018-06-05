package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.Stats;
import com.revature.service.StatsService;

@Controller("statsController")
@RequestMapping("/stats")
public class StatsController {

	@Autowired
	private StatsService statsService;

	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<Stats>> getAllUsers() {
		return new ResponseEntity<>(statsService.getStats(), HttpStatus.OK);
	}
	
}
