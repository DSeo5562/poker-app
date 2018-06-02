package com.revature.dao;

import com.revature.beans.GameStates;

public interface GameStatesDao {
	public int addGame(GameStates g);
    public GameStates getGameStatesById(int id);
    public void updateGameStates(GameStates g);
    public void deleteGameStates(GameStates g);
}
