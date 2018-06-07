//package com.revature.test;
//
//import static org.junit.Assert.assertEquals;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.jdbc.Sql;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//
//import com.revature.beans.GameStates;
//import com.revature.beans.Users;
//import com.revature.repository.UsersRepository;
//
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = {"classpath:beans.xml"})
//@Sql("classpath:PokerAppH2.sql")
//public class UsersRepositoryTest {
//	
//	@Autowired
//	private UsersRepository ur;
//	
//	@Test
//	public void testInsertUsers() {
//		GameStates g = new GameStates("", 1, 100, 0, 800, "");
//		Users u = new Users(g, "test@gmail.com", "password", "Kevin", "Magno", "km1000", false);
//		ur.addUser(u);
//		assertEquals("Kevin", u.getFirstName());
//	}
//}