package beans;

import java.util.Arrays;


public class Player {

	private String username;
	private int winnings;
	private String[] hand = new String[2];
	private playerAction lastAction;
	
	enum playerAction {
		FOLD, CHECK, BET;
	}
	
	public Player() {
		super();
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

	public String[] getHand() {
		return hand;
	}

	public void setHand(String card1, String card2) {
		hand[0] = card1;
		hand[1] = card2;
	}

	public playerAction getLastAction() {
		return lastAction;
	}

	public void setLastAction(playerAction lastAction) {
		this.lastAction = lastAction;
	}

	@Override
	public String toString() {
		return "Player [username=" + username + ", winnings=" + winnings + ", hand=" + Arrays.toString(hand)
				+ ", lastAction=" + lastAction + "]";
	}
}
