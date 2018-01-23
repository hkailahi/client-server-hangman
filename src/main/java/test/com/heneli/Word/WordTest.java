package test.com.heneli.Word;

import com.heneli.Guessable.Guessable;
import com.heneli.Word.Word;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.assertEquals;

public class WordTest {

    Word word;

    @Before
    public void setUp() throws Exception {
        word = new Word("hellotest");
    }

    @Test
    public void getContent() {
        String contentVal = "test";
        word.setContent(contentVal);

        assertEquals(contentVal, word.getContent());
    }


    @Test
    public void getGuesses() {
        List<Guessable> guessListVal = new ArrayList<>();

        int i = 0;
        for (char letter : "test".toCharArray()) {
            guessListVal.add(new Guessable(letter, i++));
        }

        word.setGuesses(guessListVal);

        assertEquals(guessListVal, word.getGuesses());
    }

    @Test
    public void getUniqueChars() {
        Set uniqueCharsVal = new HashSet<>();

        for (char letter : "test".toCharArray()) {
            uniqueCharsVal.add(letter);
        }

        word.setUniqueChars(uniqueCharsVal);

        assertEquals(uniqueCharsVal, word.getUniqueChars());
    }
}