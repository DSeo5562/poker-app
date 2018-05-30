package dao;

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

}
