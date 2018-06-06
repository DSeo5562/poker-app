package com.revature.test;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;

import org.junit.Test;

import beans.Game;
import beans.Player;

public class PokerScoreTest {
	public Player p = new Player();
	public HashMap<Character, Integer> cardValue;
	public Game g = new Game(0);
	
	public PokerScoreTest() {
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
	
	@Test // Testing Royal Flush
	public void firstPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("AH KH", "QD JC TH 6H 2H"), 18_140_000);
	}
	
	@Test // Testing High Card
	public void secondPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("AH KH", "QD 7C 9D 8S 2C"), 27);
	}
	
	@Test // Testing Flush
	public void thirdPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("AH KH", "QH 7H 9D 8S 2H"), 10_000_000);
	}
	
	@Test //Testing Full House
	public void fourthPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("AH AD", "AC 7H 9D 2S 2H"), 12_140_200);
	}
	
	@Test //Testing four of a kind
	public void fifthPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("2H 2D", "AC 7H 9D 2S 2C"), 14_020_000);
	}
	
	@Test //Testing three of a kind
	public void sixthPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("4H 4D", "AC 5H 4S TS 2C"), 6_040_000);
	}
	
	@Test //Testing two pair
	public void seventhPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("4H TH", "AC 5H 4S TS 2C"), 4_100_414);
	}
	
	@Test //Testing pair
	public void eighthPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("QH TH", "TC 6H 4S 3S 2C"), 2_100_022);
	}
	
	@Test //Testing straight
	public void ninthPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("5H TH", "TC 6H 4S 3S 2C"), 8_060_000);
	}
	
	@Test //Testing high straight
	public void tenthPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("5H 7H", "TC 6H 4S 3S 2C"), 8_070_000);
	}
	
	@Test //Testing high straight flush
	public void eleventhPlayerScoreTest() {
		assertEquals(g.determinePlayerBestHand("5H 7H", "TC 6H 4H 3H 2H"), 18_070_000);
	}
}