package com.revature.requestHelper;

import java.util.List;

import com.revature.beans.Users;

public class UserLogin {
	
//	public String checkLogin(String username, String password, List<Users> u) {
//		System.out.println("In checkLogin method");
//		for(Users user : u) {
//			if(user.getUsername() == username) {
//				if(user.getPassword() == password) {
//					// Correct Password
//					return "forward:/home";
//				} else {
//					// Incorrect Password
//					return "forward:/login";
//				}
//			}
//		}
//		// No User Found
//		return "forward:/login";
//	}
	
	public static String checkLogin(Users user, String password) {
		if(user == null) {
			System.out.println("No User Exists!");
			return "forward:/login";
		} else if(user.getPassword().equals(password)) {
			System.out.println("User login works!");
			return "forward/homepage";
		} else {
			System.out.println("Incorrect password");
			return "forward:/login";
		}
	}
}
