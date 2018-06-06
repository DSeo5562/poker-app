package com.revature.requestHelper;

import java.util.List;

import com.revature.beans.Users;

public class UserLogin {
	
	public String checkLogin(String username, String password, List<Users> u) {	
		for(Users user : u) {
			if(user.getUsername() == username) {
				if(user.getPassword() == password) {
					// Correct Password
					return "forward:/home";
				} else {
					// Incorrect Password
					return "forward:/login";
				}
			}
		}
		// No User Found
		return "forward:/login";
	}
}
