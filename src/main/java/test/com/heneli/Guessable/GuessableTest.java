package test.com.heneli.Guessable;

import com.heneli.Guessable.Guessable;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GuessableTest {

    private Guessable guessable;

    @Before
    public void setUp() {
        guessable = new Guessable('h', 0);
    }

    @Test
    public void getAnswer() {
        char answerValue = 'p';
        guessable.setAnswer(answerValue);

        assertEquals(answerValue, guessable.getAnswer());
    }

    @Test
    public void isGuessed() {
        boolean guessedValue = true;
        guessable.setGuessed(guessedValue);

        assertEquals(guessedValue, guessable.isGuessed());
    }


    @Test
    public void getIndex() {
        int indexValue = 5;
        guessable.setIndex(indexValue);

        assertEquals(indexValue, guessable.getIndex());
    }
}