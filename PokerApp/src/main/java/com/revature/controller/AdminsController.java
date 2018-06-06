package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.Admins;
import com.revature.service.AdminsService;

@Controller("adminsController")
@RequestMapping("/admins")
public class AdminsController {
	
	@Autowired
	private AdminsService adminsService;

	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<Admins>> getAllUsers() {
		return new ResponseEntity<>(adminsService.getAdmins(), HttpStatus.OK);
	}

}
