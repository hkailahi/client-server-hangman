package test.com.heneli.Game;

import com.heneli.Game.GameSession;
import com.heneli.Word.Word;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class GameSessionTest {

    private GameSession gameSession;

    @Before
    public void setUp() {
        gameSession = new GameSession();
        gameSession.setWord(new Word("hellotest")); // 9 letters
    }

    @Test
    public void guessHandler() {
        // Case 1 - Correct choice + win
        char letterVal1 = 'l';
        int numIncorrect1 = 9, numCorrect1 = 7, newCorrect1 = 9;
        boolean guessHandlerVal1 = true;
        gameSession.setNumCorrect(numCorrect1);
        gameSession.setNumIncorrect(numIncorrect1);

        assertEquals(guessHandlerVal1, gameSession.guessHandler(letterVal1));
        assertEquals(numIncorrect1, gameSession.getNumIncorrect());
        assertEquals(newCorrect1, gameSession.getNumCorrect());

        // Case 2 -  Correct choice + continue
        char letterVal2 = 'o';
        int numIncorrect2 = 8, numCorrect2 = 7, newCorrect2 = 8;
        boolean guessHandlerVal2 = false;
        gameSession.setNumCorrect(numCorrect2);
        gameSession.setNumIncorrect(numIncorrect2);

        assertEquals(guessHandlerVal2, gameSession.guessHandler(letterVal2));
        assertEquals(numIncorrect2, gameSession.getNumIncorrect());
        assertEquals(newCorrect2, gameSession.getNumCorrect());

        // Case 3 - Incorrect choice + lose
        char letterVal3 = 'z';
        int numIncorrect3 = 9, numCorrect3 = 7, newIncorrect1 = 10;
        boolean guessHandlerVal3 = false;
        gameSession.setNumCorrect(numCorrect3);
        gameSession.setNumIncorrect(numIncorrect3);

        assertEquals(guessHandlerVal3, gameSession.guessHandler(letterVal3));
        assertEquals(newIncorrect1, gameSession.getNumIncorrect());
        assertEquals(numCorrect3, gameSession.getNumCorrect());

        // Case 4 -  Incorrect choice + continue
        char letterVal4 = 'q';
        int numIncorrect4 = 5, numCorrect4 = 7, newIncorrect2 = 6;
        boolean guessHandlerVal4 = false;
        gameSession.setNumCorrect(numCorrect4);
        gameSession.setNumIncorrect(numIncorrect4);

        assertEquals(guessHandlerVal4, gameSession.guessHandler(letterVal4));
        assertEquals(newIncorrect2, gameSession.getNumIncorrect());
        assertEquals(numCorrect4, gameSession.getNumCorrect());
    }

    @Test
    public void isWon() {
        for (int i=-1; i<8; i++) {
            gameSession.setNumCorrect(i);
            assertFalse(gameSession.isWon());
        }

        gameSession.setNumCorrect(9);
        assertTrue(gameSession.isWon());
    }

    @Test
    public void isLost() {
        for (int i=-1; i<9; i++) {
            gameSession.setNumIncorrect(i);
            assertFalse(gameSession.isLost());
        }

        gameSession.setNumIncorrect(10);
        assertTrue(gameSession.isLost());
    }
}