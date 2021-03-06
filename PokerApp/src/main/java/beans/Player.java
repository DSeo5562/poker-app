package beans;

import java.util.ArrayList;
import java.util.Arrays;


public class Player {
	private int id;
	private String username;
	private int winnings;
	private ArrayList<String> hand;
	private playerAction lastAction;
	private int playerOrder;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getPlayerOrder() {
		return playerOrder;
	}

	public void setPlayerOrder(int playerOrder) {
		this.playerOrder = playerOrder;
	}

	public Player() {
		hand = new ArrayList<String>();
		username = null;
		lastAction = null;
		winnings = 0;
	}
	
	enum playerAction {
		FOLD, CHECK, BET;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getWinnings() {
		return winnings;
	}

	public void setWinnings(int winnings) {
		this.winnings = winnings;
	}

	public ArrayList<String> getHand() {
		return hand;
	}

	public void setHand(String card1, String card2) {
		hand.add(card1);
		hand.add(card2);
	}

	public playerAction getLastAction() {
		return lastAction;
	}

	public void setLastAction(playerAction lastAction) {
		this.lastAction = lastAction;
	}
}
