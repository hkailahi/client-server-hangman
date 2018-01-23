package com.heneli.Game;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class GameSessionManager {

    private static List<GameSession> gamesPlayed;
    private static GameSession currGame;

    public GameSessionManager() {
        gamesPlayed = new CopyOnWriteArrayList<>();
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
        // Webpack server is doing a double refresh on React client startup
        // I am treating every refresh beyond startup as a loss
        return gamesPlayed.size() - countWins() - 2;
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
