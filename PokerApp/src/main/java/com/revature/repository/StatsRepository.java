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

import com.revature.beans.Stats;

@Repository(value="statsRepository")
@Transactional
@EnableTransactionManagement
public class StatsRepository {
	
	@Autowired
	SessionFactory sessionFactory;
	
	public int addStat(Stats st) {
		Session s = sessionFactory.getCurrentSession();
		int result = (int) s.save(st);
		return result;
	}

	public Stats getStatById(int id) {
		Session s = sessionFactory.getCurrentSession();
		Stats st = (Stats) s.get(Stats.class, id);
		return st;
	}

	public List<Stats> getStats() {
		List<Stats> stats = new ArrayList<Stats>();
		Session s = sessionFactory.getCurrentSession();
		stats = s.createQuery("from Stats").list();
		return stats;
	}

	public void updateStat(Stats st) {
		Session s = sessionFactory.getCurrentSession();
		Transaction tx = s.beginTransaction();
		s.update(st);
		tx.commit();
		s.close();
	}

	public void deleteStat(Stats st) {
		Session s = sessionFactory.getCurrentSession();
		Transaction tx = s.beginTransaction();
		s.delete(st);
		tx.commit();
		s.close();
	}

}
