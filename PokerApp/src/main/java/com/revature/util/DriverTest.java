package com.revature.util;

import org.hibernate.Session;

public class DriverTest {

	public static void main(String[] args) {
		 Session s = HibernateUtil.getSession();
		 System.out.println(s.getStatistics()); 
		 System.out.println(s.isOpen());
		 s.close(); 
		 System.out.println(s.isOpen());
	}

}
