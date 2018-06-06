package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Admins;
import com.revature.repository.AdminsRepository;

@Service(value="adminsService")
public class AdminsService {

	@Autowired
	AdminsRepository ar;
	
	public void addAdmin(Admins a) {
		ar.addAdmin(a);
	}
	
	public Admins getAdminId(int id) {
		Admins a = ar.getAdminById(id);
		return a;
	}
	
	public List<Admins> getAdmins() {
		List<Admins> admins = ar.getAdmins();
		return admins;
	}
	
	public void updateAdmin(Admins a) {
		ar.updateAdmin(a);
	}
	
	public void deleteAdmin(Admins a) {
		ar.deleteAdmin(a);
	}
	
}
