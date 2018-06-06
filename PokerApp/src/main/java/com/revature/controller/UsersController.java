package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.beans.GameStates;
import com.revature.beans.Users;
import com.revature.requestHelper.UserLogin;
import com.revature.service.UsersService;

@Controller("usersController")
@RequestMapping("/users")
public class UsersController {

	@Autowired
	private UsersService usersService;
	
	UserLogin ul;

	@CrossOrigin
	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<Users>> getAllUsers() {
		return new ResponseEntity<>(usersService.getAllUsers(), HttpStatus.OK);
	}

	// test path for HTML page
	@GetMapping(value = "/HelloPage")
	public String getStaticFlashcardPage() {
		return "Hello";
	}

	@CrossOrigin
	@GetMapping(value = "/login")
	public String handleLogin(@RequestBody MultiValueMap<String, String> formParams) {
		System.out.println("form params received " + formParams);

		String username = formParams.getFirst("username");
		String password = formParams.getFirst("password");
		List<Users> u = usersService.getAllUsers();
		
		System.out.println(username + "is trying to login with password:" + password);
		
		String destination = ul.checkLogin(username, password, u);
			
		return destination;
	}

	// to return bundled Angular app
	@GetMapping(value = "/app")
	public String getApp() {
		return "forward:/static/index.html";
	}

}
