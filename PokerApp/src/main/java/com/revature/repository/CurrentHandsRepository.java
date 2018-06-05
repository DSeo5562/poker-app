package com.revature.repository;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.revature.beans.CurrentHands;

@Repository(value="currentHandsRepository")
@Transactional
@EnableTransactionManagement
public class CurrentHandsRepository {
	
	@Autowired
	SessionFactory sessionFactory;
	
	public int addCurrentHand(CurrentHands h) {
		Session s = sessionFactory.getCurrentSession();
		int result = (int) s.save(h);
		return result;
	}

	public CurrentHands getCurrentHandById(int id) {
		Session s = sessionFactory.getCurrentSession();
		CurrentHands h = (CurrentHands) s.get(CurrentHands.class, id);
		return h;
	}

	public List<CurrentHands> getCurrentHands() {
		List<CurrentHands> currentHands = new ArrayList<CurrentHands>();
		Session s = sessionFactory.getCurrentSession();
		currentHands = s.createQuery("from CurrentHands").list();
		return currentHands;
	}

	public void updateCurrentHand(CurrentHands h) {
		Session s = sessionFactory.getCurrentSession();
		Transaction tx = s.beginTransaction();
		s.update(h);
		tx.commit();
		s.close();
	}

	public void deleteCurrentHand(CurrentHands h) {
		Session s = sessionFactory.getCurrentSession();
		Transaction tx = s.beginTransaction();
		s.delete(h);
		tx.commit();
		s.close();
	}

}
