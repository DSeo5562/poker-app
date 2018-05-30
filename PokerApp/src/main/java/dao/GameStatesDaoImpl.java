package dao;

import org.hibernate.Session;
import org.hibernate.Transaction;

import beans.GameStates;
import util.HibernateUtil;

public class GameStatesDaoImpl implements GameStatesDao{

	@Override
	public int addGame(GameStates g) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		int result = (int) s.save(g);
		tx.commit();
		s.close();
		return result;
	}

}
