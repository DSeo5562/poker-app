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
	public Game g = new Game();
	
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
		p.setHand("AH", "KH");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("QD");
		list.add("JC");
		list.add("TH");
		list.add("6H");
		list.add("2H");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 18_140_000);
	}
	
	@Test // Testing High Card
	public void secondPlayerScoreTest() {
		p.setHand("AH", "KH");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("QD");
		list.add("7C");
		list.add("9D");
		list.add("8S");
		list.add("2C");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 27);
	}
	
	@Test // Testing Flush
	public void thirdPlayerScoreTest() {
		p.setHand("AH", "KH");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("QH");
		list.add("7H");
		list.add("9D");
		list.add("8S");
		list.add("2H");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 10_000_000);
	}
	
	@Test //Testing Full House
	public void fourthPlayerScoreTest() {
		p.setHand("AH", "AD");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("AC");
		list.add("7H");
		list.add("9D");
		list.add("2S");
		list.add("2H");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 12_140_200);
	}
	
	@Test //Testing four of a kind
	public void fifthPlayerScoreTest() {
		p.setHand("2H", "2D");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("AC");
		list.add("7H");
		list.add("9D");
		list.add("2S");
		list.add("2C");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 14_020_000);
	}
	
	@Test //Testing three of a kind
	public void sixthPlayerScoreTest() {
		p.setHand("4H", "4D");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("AC");
		list.add("5H");
		list.add("4S");
		list.add("TS");
		list.add("2C");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 6_040_000);
	}
	
	@Test //Testing two pair
	public void seventhPlayerScoreTest() {
		p.setHand("4H", "TH");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("AC");
		list.add("5H");
		list.add("4S");
		list.add("TS");
		list.add("2C");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 4_100_414);
	}
	
	@Test //Testing pair
	public void eighthPlayerScoreTest() {
		p.setHand("QH", "TH");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("TC");
		list.add("6H");
		list.add("4S");
		list.add("3S");
		list.add("2C");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 2_100_022);
	}
	
	@Test //Testing straight
	public void ninthPlayerScoreTest() {
		p.setHand("5H", "TH");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("TC");
		list.add("6H");
		list.add("4S");
		list.add("3S");
		list.add("2C");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 8_060_000);
	}
	
	@Test //Testing high straight
	public void tenthPlayerScoreTest() {
		p.setHand("5H", "7H");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("TC");
		list.add("6H");
		list.add("4S");
		list.add("3S");
		list.add("2C");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 8_070_000);
	}
	
	@Test //Testing high straight flush
	public void eleventhPlayerScoreTest() {
		p.setHand("5H", "7H");
		
		ArrayList<String> list = new ArrayList<>();
		list.add("TC");
		list.add("6H");
		list.add("4H");
		list.add("3H");
		list.add("2H");
		g.setCommunityCards(list);
		
		assertEquals(g.determinePlayerBestHand(p), 18_070_000);
	}
}