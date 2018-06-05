package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.CurrentHands;
import com.revature.repository.CurrentHandsRepository;

@Service(value="currentHandsService")
public class CurrentHandsService {

	@Autowired
	CurrentHandsRepository chr;
	
	public void addCurrentHand(CurrentHands c) {
		chr.addCurrentHand(c);
	}
	
	public CurrentHands getCurrentHandById(int id) {
		CurrentHands c = chr.getCurrentHandById(id);
		return c;
	}
	
	public List<CurrentHands> getCurrentHands() {
		List<CurrentHands> currentHands = chr.getCurrentHands();
		return currentHands;
	}
	
	public void updateCurrentHand(CurrentHands c) {
		chr.updateCurrentHand(c);
	}
	
	public void deleteCurrentHand(CurrentHands c) {
		chr.deleteCurrentHand(c);
	}
}
