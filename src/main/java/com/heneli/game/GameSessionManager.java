package com.heneli.game;

import java.util.ArrayList;
import java.util.List;

public class GameSessionManager {

    private static List<GameSession> gamesPlayed;
    private static GameSession currGame;

    public GameSessionManager() {
        gamesPlayed = new ArrayList<>();
        addGame();

    }

    public void addGame() {
        GameSession newGame = new GameSession();

        this.currGame = newGame;
        gamesPlayed.add(newGame);
    }

    public GameSession getCurrentGame() {
        return currGame;
    }

    public long countWins() {
        return gamesPlayed.stream()
                .filter(g -> g.isWon())
                .count();
    }

    public long countLosses() {
        return gamesPlayed.stream()
                .filter(g -> g.isLost())
                .count();
    }

    public long countCorrect() {
        return gamesPlayed.stream()
                .mapToLong(GameSession::getNumCorrect)
                .sum();
    }

    public long countIncorrect() {
        return gamesPlayed.stream()
                .mapToLong(GameSession::getNumIncorrect)
                .sum();
    }


}
