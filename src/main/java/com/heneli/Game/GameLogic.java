package com.heneli.Game;

import com.heneli.Word.Word;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;

public class GameLogic {

    private static Map<Long, Word> allWords = new HashMap<>();
    private static long numWords = 0;
    private static String file = "./src/main/java/resources/words_alpha.txt";

    public GameLogic() {
        initWords();
    }

    private static void initWords() {
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                allWords.put(numWords++, new Word(line));
            }
        } catch (IOException e) {
            System.out.println("File name 'words_alpha.txt' not found!");
            e.printStackTrace();
        }
    }

    public static Word getNewWord() {
        long value = ThreadLocalRandom.current().nextLong(numWords);
        return allWords.get(value);
    }

    public int containsLetter(Word word, char letter) {
        int occurences = 0;

        for (int i=0; i<word.getContent().length(); i++) {
            if (word.getGuesses().get(i).getAnswer() == letter) {
                word.getGuesses().get(i).setGuessed(true);
                occurences++;
            }
        }

        return occurences;
    }

    public static void setAllWords(Map<Long, Word> allWords) {
        GameLogic.allWords = allWords;
    }

    public static void setNumWords(long numWords) {
        GameLogic.numWords = numWords;
    }

    public static String getFile() {
        return file;
    }

    public static void setFile(String file) {
        GameLogic.file = file;
    }
}
