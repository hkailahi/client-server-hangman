package com.heneli.Guessable;

public class Guessable {

//    private transient char answer;
    private char answer;
    private boolean isGuessed;
    private int index;

    public Guessable(char guess, int index) {
        this.answer = guess;
        this.index = index;
        this.isGuessed = false;
    }

    public Guessable(char answer, boolean isGuessed, int index) {
        this.answer = answer;
        this.isGuessed = isGuessed;
        this.index = index;
    }

    public char getAnswer() {
        return answer;
    }

    public void setAnswer(char answer) {
        this.answer = answer;
    }

    public boolean isGuessed() {
        return isGuessed;
    }

    public void setGuessed(boolean guessed) {
        isGuessed = guessed;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }
}
