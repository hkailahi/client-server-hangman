package test.com.heneli.Game;

import com.heneli.Game.GameSession;
import com.heneli.Game.GameSessionManager;
import com.heneli.Word.Word;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GameSessionManagerTest {

    private GameSessionManager gameSessionManager;
    private GameSession g1, g2, g3, g4, g5;

    @Before
    public void setUp() {
        gameSessionManager = new GameSessionManager();

        g1 = new GameSession();
        g2 = new GameSession();
        g3 = new GameSession();
        g4 = new GameSession();
        g5 = new GameSession();

        // Throwaway starting session from webpack refresh
        GameSession throwaway = new GameSession();

        // Sample GameSessions
        g1.setWord(new Word("hellotest"));
        g1.setNumCorrect(3);
        g1.setNumIncorrect(9); // loss
        // W/L/C/I = 0/1/3/9

        g2.setWord(new Word("testhello"));
        g2.setNumCorrect(9); // win
        g2.setNumIncorrect(3);
        // W/L/C/I = 1/1/12/12

        g3.setWord(new Word("john"));
        g3.setNumCorrect(1);
        g3.setNumIncorrect(1); // loss (on incomplete)
        // W/L/C/I = 1/2/13/13

        g4.setWord(new Word("doe"));
        g4.setNumCorrect(1);
        g4.setNumIncorrect(3); // loss
        // W/L/C/I = 1/3/14/16

        g5.setWord(new Word("test"));
        g5.setNumCorrect(4); // win
        g5.setNumIncorrect(2);
        // W/L/C/I = 2/3/18/18

        gameSessionManager.addGame(throwaway);
        gameSessionManager.addGame(g1);
        gameSessionManager.addGame(g2);
        gameSessionManager.addGame(g3);
    }

    @Test
    public void addGame() {
        // starting size should be 5, one from constructor + throwaway + (g1,g2,g3)
//        int startSize = 4, endSize = 5;
        int startSize = 5, endSize = 6;

        GameSession addedGame = new GameSession();
        addedGame.setWord(new Word("addgametest"));

        assertEquals(startSize, gameSessionManager.getGamesPlayed().size());
        gameSessionManager.addGame(addedGame);
        assertEquals(addedGame.getWord().getContent(), gameSessionManager.getCurrGame().getWord().getContent());
        assertEquals(endSize, gameSessionManager.getGamesPlayed().size());
    }

    @Test
    public void countLosses() {
        // default + throwaway + (g1,g2,g3)
        assertEquals(2, gameSessionManager.countLosses());

        // + g4
        gameSessionManager.addGame(g4);
        assertEquals(3, gameSessionManager.countLosses());

        // + g5
        gameSessionManager.addGame(g5);
        assertEquals(3, gameSessionManager.countLosses());
    }

    @Test
    public void countWins() {
        // default + throwaway + (g1,g2,g3)
        assertEquals(1, gameSessionManager.countWins());

        // + g4
        gameSessionManager.addGame(g4);
        assertEquals(1, gameSessionManager.countWins());

        // + g5
        gameSessionManager.addGame(g5);
        assertEquals(2, gameSessionManager.countWins());
    }

    @Test
    public void countCorrect() {
        // default + throwaway + (g1,g2,g3)
        assertEquals(13, gameSessionManager.countCorrect());

        // + g4
        gameSessionManager.addGame(g4);
        assertEquals(14, gameSessionManager.countCorrect());

        // + g5
        gameSessionManager.addGame(g5);
        assertEquals(18, gameSessionManager.countCorrect());
    }

    @Test
    public void countIncorrect() {
        // default + throwaway + (g1,g2,g3)
        assertEquals(13, gameSessionManager.countIncorrect());

        // + g4
        gameSessionManager.addGame(g4);
        assertEquals(16, gameSessionManager.countIncorrect());

        // + g5
        gameSessionManager.addGame(g5);
        assertEquals(18, gameSessionManager.countIncorrect());
    }
}