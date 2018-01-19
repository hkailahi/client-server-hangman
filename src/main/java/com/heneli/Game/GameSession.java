package com.heneli.Game;

import com.heneli.Word.Word;

public class GameSession {

    private final int MAX_WRONG_GUESSES = 10;

    private Word word;
    private int numIncorrect;
    private int numCorrect;

    private GameLogic logic = new GameLogic();

    public GameSession() {
        this.word = logic.getNewWord();
        this.numIncorrect = 0;
        this.numCorrect = 0;
    }

    public boolean guessChar(char c) {
        return guessHandler(c);
    }

    public boolean guessHandler(char c) {
        if (!word.getUniqueChars().contains(c)) {
            numIncorrect++;
            if (isLost()) { return false; }
        }

        numCorrect += logic.containsLetter(word, c);
        if (isWon()) { return true; }

        return false;
    }

    public boolean isWon() {
        return numCorrect == word.getContent().length();
    }

    public boolean isLost() {
        return numIncorrect >= MAX_WRONG_GUESSES;
    }

    public int getNumIncorrect() {
        return numIncorrect;
    }

    public void setNumIncorrect(int numIncorrect) {
        this.numIncorrect = numIncorrect;
    }

    public int getNumCorrect() {
        return numCorrect;
    }

    public void setNumCorrect(int numCorrect) {
        this.numCorrect = numCorrect;
    }

    public Word getWord() {
        return word;
    }

    public void setWord(Word word) {
        this.word = word;
    }
}
