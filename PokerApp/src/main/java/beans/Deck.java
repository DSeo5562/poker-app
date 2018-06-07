package beans;

import java.util.Random;

public class Deck {
	
	public static String shuffleDeck() {
		String[] startDeck = {"AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC",
				   			  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD",
				   			  "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH",
				   			  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS"};
		
		Random r = new Random();
		for (int i = 0; i < startDeck.length; i++) {
			int ran = r.nextInt(52);
			String tmp = startDeck[ran];
			startDeck[ran] = startDeck[i];
			startDeck[i] = tmp; 
		}
		
		StringBuilder shuffledDeck = new StringBuilder();
		
		int i = 0;
		for(i = 0; i < startDeck.length - 1; i++) {
			shuffledDeck.append(startDeck[i]);
			shuffledDeck.append(" ");
		}
		shuffledDeck.append(startDeck[i]);
		
		return shuffledDeck.toString();
	}
}
