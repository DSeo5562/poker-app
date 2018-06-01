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

	    @Override
	    public GameStates getGameStatesById(int id) {
	        Session s = HibernateUtil.getSession();
	        Transaction tx = s.beginTransaction();
	        GameStates g = (GameStates) s.get(GameStates.class, id);
	        tx.commit();
	        s.close();
	        return g;
	    }

	    @Override
	    public void updateGameStates(GameStates g) {
	        Session s = HibernateUtil.getSession();
	        Transaction tx = s.beginTransaction();
	        s.update(g);
	        tx.commit();
	        s.close();
	        
	    }

	    @Override
	    public void deleteGameStates(GameStates g) {
	        Session s = HibernateUtil.getSession();
	        Transaction tx = s.beginTransaction();
	        s.delete(g);
	        tx.commit();
	        s.close();
	        
	    }

}
