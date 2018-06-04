package beans;

import static org.junit.Assert.assertArrayEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import beans.Player.playerAction;

public class Game {
	private ArrayList<Player> players;
	private Deck deck;
	private ArrayList<String> communityCards;
	private int currentPlayer;
	
	private HashMap<Character, Integer> cardValue;
	
	public Game() {
		cardValue = new HashMap<Character, Integer>();
		cardValue.put('2', 2);
		cardValue.put('3', 3);
		cardValue.put('4', 4);
		cardValue.put('5', 5);
		cardValue.put('6', 6);
		cardValue.put('7', 7);
		cardValue.put('8', 8);
		cardValue.put('9', 9);
		cardValue.put('T', 10);
		cardValue.put('J', 11);
		cardValue.put('Q', 12);
		cardValue.put('K', 13);
		cardValue.put('A', 14);
	}
	
	public void dealToPlayers() {
		for (Player p : players) {
			p.setHand(deck.dealCard(), deck.dealCard());
		}
	}
	
	public void dealFlop() {
		//deal 3 community cards
		communityCards.add(deck.dealCard());
		communityCards.add(deck.dealCard());
		communityCards.add(deck.dealCard());	
	}
	
	public void dealTurn() {
		//deal 4th card
		communityCards.add(deck.dealCard());
	}
	
	public void dealRiver() {
		//deal 5th and final card
		communityCards.add(deck.dealCard());
	}
	
	public void cycle() {
		
	}
	
	public void askPlayer() {
		
	}
	
	public void updateGameState() {
		//storing player actions and updating the game
		//update player turn
		//update pot
		//update hasFolded, checked, raised
		currentPlayer++;
	}
	
	public boolean doesCycleContinue() {
		int count = 0;
		for (Player p : players) {
			if (p.getLastAction() != playerAction.FOLD) {
				count++;
			};
		}
		return (count > 1);
	}
	
	public String declareRoundWinner() {
		return "";
	}
	
	public int determinePlayerBestHand(Player p) {
		ArrayList<String> possibleHand = new ArrayList<>(p.getHand());
		possibleHand.addAll(communityCards);
		
		sortHand(possibleHand);
		
		int handValue = 0;
		
		boolean flush = checkFlush(possibleHand);
		if(flush) {
			handValue += 10_000_000;
		}
		
		int val = checkStraight(possibleHand);
		if(val > 0) {
			handValue += 8_000_000;
			handValue += (val * 10_000);
			return handValue;
		} else if(flush) {
			return handValue;
		}
		
		val = checkFourOfAKind(possibleHand);
		if(val > 0) {
			handValue += 14_000_000;
			handValue += (val * 10_000);
			return handValue;
		}
		
		val = checkThreeOfAKind(possibleHand);
		// Check for full house, or three of a kind
		if(val > 0) {
			int val2 = checkPair(possibleHand, val);
			if(val2 > 0) {
				handValue += 12_000_000;
				handValue += (val * 10_000);
				handValue += (val2 * 100);
				return handValue;
			} else {
				handValue += 6_000_000;
				handValue += (val * 10_000);
				return handValue;
			}
		}
		
		val = checkPair(possibleHand, 0);
		if(val > 0) {
			int val2 = checkPair(possibleHand, val);
			if(val2 > 0) {
				handValue += 4_000_000;
				handValue += (val * 10_000);
				handValue += (val2 * 100);
				int hc = getHighCard(p.getHand());
				handValue += hc;
				return handValue;
			} else {
				handValue += 2_000_000;
				handValue += (val * 10_000);
				int hc = getHighCard(p.getHand());
				handValue += hc;
				return handValue;
			}
		}
		
		return getHighCard(p.getHand());
	}
	
	public int getHighCard(ArrayList<String> hand) {
		int highCard = 0;
		for(String s: hand) {
			highCard += cardValue.get(s.charAt(0));
		}
		return highCard;
	}
	
	public int checkPair(ArrayList<String> hand, int ignore) {
		ArrayList<Integer> cardValues = new ArrayList<>();
		for (String s : hand) {
			cardValues.add(cardValue.get(s.charAt(0)));
		}
	
		//check for pair
		int maxCard = 0;
		int count = 1;
		for(int x = 1; x <= 6; x++) {
			if(cardValues.get(x) == ignore) {
				continue;
			}
			if(cardValues.get(x) != cardValues.get(x-1)) {
				count = 1;
			} else {
				count++;
				if (count == 2) {
					maxCard = cardValues.get(x);
				}
			}
		}
		return maxCard;
	}
	
	public int checkThreeOfAKind(ArrayList<String> hand) {
		ArrayList<Integer> cardValues = new ArrayList<>();
		for (String s : hand) {
			cardValues.add(cardValue.get(s.charAt(0)));
		}
	
		//check for three of a kind
		int maxCard = 0;
		int count = 1;
		for(int x = 1; x <= 6; x++) {
			if(cardValues.get(x) != cardValues.get(x-1)) {
				count = 1;
			} else {
				count++;
				if (count == 3) {
					maxCard = cardValues.get(x);
				}
			}
		}
		return maxCard;
	}
		
	public boolean checkFlush(ArrayList<String> hand) {
		int spades = 0;
		int hearts = 0;
		int diamonds = 0;
		int clubs = 0;
		for(String s : hand) {
			if (s.charAt(1) == 'S') {
				spades++;
			} else if (s.charAt(1) == 'H') {
				hearts++;
			} else if (s.charAt(1) == 'D') {
				diamonds++;
			} else if (s.charAt(1) == 'C') {
				clubs++;
			}
		}
		if (spades > 4 || hearts > 4 || diamonds > 4 || clubs > 4) {
			return true;
		} else return false;
	}
	
	public int checkFourOfAKind(ArrayList<String> hand) {
		ArrayList<Integer> cardValues = new ArrayList<>();
		for (String s : hand) {
			cardValues.add(cardValue.get(s.charAt(0)));
		}
	
		//check for four of a kind
		int maxCard = 0;
		int count = 1;
		for(int x = 1; x <= 6; x++) {
			if(cardValues.get(x) != cardValues.get(x-1)) {
				count = 1;
			} else {
				count++;
				if (count == 4) {
					maxCard = cardValues.get(x);
					return maxCard;
				}
			}
		}
		return maxCard;
	}
	
	public int checkStraight(ArrayList<String> hand) {
		ArrayList<Integer> cardValues = new ArrayList<>();
		//convert to card values
		for (String s : hand) {
			cardValues.add(cardValue.get(s.charAt(0)));
		}
		//Quick check if not straight
		if ((cardValues.get(4) - 1) != cardValues.get(3)) {
			return 0;		
		}
		//check for straight
		int maxCard = 0;
		int count = 1;
		for(int x = 1; x <= 6; x++) {
			if((cardValues.get(x) - 1) != cardValues.get(x-1)) {
				count = 1;
			} else {
				count++;
				if (count >= 5) {
					maxCard = cardValues.get(x);
				}
			}
		}
		return maxCard;
	}
		
	public void sortHand(ArrayList<String> hand) {
		hand.sort((card1, card2) -> {
			int c1Val = cardValue.get(card1.charAt(0));
			int c2Val = cardValue.get(card2.charAt(0));
			if(c1Val == c2Val) return 0;
			return (c1Val < c2Val) ? -1 : 1;
		});
	}
}