package util;

import org.hibernate.Session;

public class DriverTest {

	public static void main(String[] args) {

		// Test for DB connection
		Session s = HibernateUtil.getSession();
		System.out.println(s.getStatistics());
		System.out.println(s.isOpen());
		s.close();
		System.out.println(s.isOpen());

//		UsersDao ud = new UsersDaoImpl();
//		GameStatesDao gd = new GameStatesDaoImpl();
//		GameStates g = new GameStates();
//		Users u = new Users(g, "aaaaa@gmail.com", "aaaaa", "Angela", "Wang", "awangaaaaa", false);
//		
//		int gId = gd.addGame(g);
//		int id = ud.addUser(u);
//		System.out.println("User ID: " + id);
//		System.out.println("Game ID: " + gId);
//		
//		int idA = 1;
//
//		Users user = ud.getUserById(idA);
//		System.out.println(user);
//		List<Users> users = ud.getUsers();
//		System.out.println(users);
	}

}
