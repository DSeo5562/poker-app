package com.revature.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import com.revature.beans.Users;
import com.revature.requestHelper.UserLogin;
import com.revature.service.UsersService;

@Controller("usersController")
@RequestMapping("/users")
public class UsersController extends HttpServlet {

	@Autowired
	private UsersService usersService;

	@Autowired
	SessionFactory sessionFactory;

	@CrossOrigin
	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<Users>> getAllUsers() {
		return new ResponseEntity<>(usersService.getAllUsers(), HttpStatus.OK);
	}

	// test path for HTML page
	@GetMapping(value = "/HelloPage")
	public String getStaticHelloPage() {
		return "Hello";
	}

	@CrossOrigin
	@RequestMapping(value = "/{username}", method = RequestMethod.GET)
	public ResponseEntity<Users> getUsersByUserName(@PathVariable String username) {
		ResponseEntity<Users> resp = null;
		Users user = usersService.getUserByUsername(username);
		resp = new ResponseEntity<>(user, HttpStatus.OK);
		return resp;
	}

	@CrossOrigin
	@RequestMapping(value = "/session", method = RequestMethod.GET)
	public ResponseEntity<Users> getUserForSession(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// Get current session
		HttpSession session = request.getSession(false);
		String username = (String) session.getAttribute("username");
		
		ResponseEntity<Users> resp = null;
		Users user = usersService.getUserByUsername(username);
		resp = new ResponseEntity<>(user, HttpStatus.OK);
		return resp;
	}

	// @CrossOrigin
	// @PostMapping("/login")
	// public String handleLogin(@RequestBody MultiValueMap<String, String>
	// formParams) {
	// System.out.println("form params received " + formParams);
	//
	// String username = formParams.getFirst("username");
	// String password = formParams.getFirst("password");
	// List<Users> u = usersService.getAllUsers();
	//
	// System.out.println(username + " is trying to login with password:" +
	// password);
	//
	// String destination = ul.checkLogin(username, password, u);
	//
	// System.out.println(destination);
	//
	// return destination;
	// }

	@CrossOrigin
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public RedirectView handleLogin(@RequestBody MultiValueMap<String, String> formParams, HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.out.println("form params received " + formParams);

		String username = formParams.getFirst("username");
		String password = formParams.getFirst("password");

		System.out.println(username + " is trying to login with password:" + password);

		Users user = usersService.getUserByUsername(username);
		System.out.println(user);

		String dest = UserLogin.checkLogin(user, password);

		RedirectView redirectView = new RedirectView();
		redirectView.setUrl(dest);
		
		// If the user successfully logs in
		HttpSession session = request.getSession();	
		if (dest.equals("http://localhost:4200/home/")){
			session.setAttribute("username", username);
		}
		
		return redirectView;
	}

	// to return bundled Angular app
	@GetMapping(value = "/app")
	public String getApp() {
		return "forward:/static/index.html";
	}

	// for delivering our static HTML pages
	@GetMapping(value = "/staticFlashcard")
	public String getStaticFlashcardPage() {
		return "forward:/static/staticFlashcard.html";
	}

}
