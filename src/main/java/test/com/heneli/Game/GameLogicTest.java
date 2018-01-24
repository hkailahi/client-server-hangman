package test.com.heneli.Game;

import com.heneli.Game.GameLogic;
import com.heneli.Word.Word;
import org.junit.Before;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertEquals;

public class GameLogicTest {

    private GameLogic gameLogic;

    @Before
    public void setUp() throws Exception {
        gameLogic = new GameLogic();
    }

    @Test
    public void getNewWord() {
        Word wordVal = new Word("hellotest");
        Map<Long, Word> allWordsVal = new HashMap<>();
        long singleWordIndex = 0L;

        allWordsVal.put(singleWordIndex++, wordVal);
        allWordsVal.put(singleWordIndex++, wordVal);
        gameLogic.setNumWords(singleWordIndex);
        gameLogic.setAllWords(allWordsVal);

        assertEquals(wordVal, gameLogic.getNewWord());
    }

    @Test
    public void containsLetter() {
        Word wordVal = new Word("hellotest");
        char letterVal1 = 'l';
        int freqVal1 = 2;

        char letterVal2 = 'o';
        int freqVal2 = 1;

        char letterVal3 = 'z';
        int freqVal3 = 0;

        assertEquals(freqVal1, gameLogic.containsLetter(wordVal, letterVal1));
        assertEquals(freqVal2, gameLogic.containsLetter(wordVal, letterVal2));
        assertEquals(freqVal3, gameLogic.containsLetter(wordVal, letterVal3));
    }
}