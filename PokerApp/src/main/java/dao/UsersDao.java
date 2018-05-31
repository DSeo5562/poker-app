package dao;

import java.util.List;

import beans.Users;

public interface UsersDao {
	public int addUser(Users u);
	public Users getUserById(int id);
	public List<Users> getUsers();
	public void updateUser(Users u);
	public void deleteUser(Users u);
	
}
