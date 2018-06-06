package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Users;
import com.revature.repository.UsersRepository;

@Service(value="usersService")
public class UsersService {
	
	@Autowired
	UsersRepository ur;
	
	public void addUser(Users u) {
		ur.addUser(u);
	}
	
	public Users getUserById(int id) {
		Users u = ur.getUserById(id);
		return u;
	}
	
	public List<Users> getAllUsers() {
		List<Users> users = ur.getAllUsers();
		return users;
	}
	
	public void updateUser(Users u) {
		ur.updateUser(u);
	}
	
	public void deleteUser(Users u) {
		ur.deleteUser(u);
	}
	
	public List<Users> getUsersWithGameId (int id) {
		return ur.getUsersWithGameId(id);
	}

}
