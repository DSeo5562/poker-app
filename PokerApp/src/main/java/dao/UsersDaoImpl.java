package dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import beans.Users;
import util.HibernateUtil;

public class UsersDaoImpl implements UsersDao {

	@Override
	public int addUser(Users u) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		int result = (int) s.save(u);
		tx.commit();
		s.close();
		return result;
	}

	@Override
	public Users getUserById(int id) {
		Session s = HibernateUtil.getSession();
		Users u = (Users) s.get(Users.class, id);
		s.close();
		return u;
	}

	@Override
	public List<Users> getUsers() {
		List<Users> users = new ArrayList<Users>();
		Session s = HibernateUtil.getSession();
		users = s.createQuery("from Users").list();
		s.close();
		return users;
	}

	@Override
	public void updateUser(Users u) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		s.save(u);
		tx.commit();
		s.close();
	}

	@Override
	public void deleteUser(Users u) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		s.delete(u);
		tx.commit();
		s.close();
	}

}
