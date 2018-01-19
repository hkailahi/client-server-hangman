package com.heneli.Game;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class GameController {

    private static GameSessionManager gameSessionManager = new GameSessionManager();

    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public String getWord() {
        return new Gson().toJson(gameSessionManager.getCurrentGame().getWord());
    }

    @RequestMapping(value = "/game", method = RequestMethod.POST)
    public ResponseEntity postLetter(@RequestBody Map<String, Character> map) {
        gameSessionManager.getCurrentGame().guessChar(map.get("letter"));
        String json = new Gson().toJson(gameSessionManager.getCurrentGame().getWord());

        return new ResponseEntity(json, HttpStatus.OK);
    }

    @RequestMapping(value = "/game/status", method = RequestMethod.GET)
    public String getGameStatus() {
        StringBuilder sb = new StringBuilder();

        sb.append("{\"status\": \"");
        if (gameSessionManager.getCurrentGame().isWon()) { sb.append("won"); }
        else if (gameSessionManager.getCurrentGame().isLost()) { sb.append("lost"); }
        else { sb.append("in-progress"); }
        sb.append("\"}");

        return sb.toString();
    }

    @RequestMapping(value = "/stats", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String getStats() {
        StringBuilder sb = new StringBuilder();

        long wins = gameSessionManager.countWins();
        long losses = gameSessionManager.countLosses();
        long correct = gameSessionManager.countCorrect();
        long incorrect = gameSessionManager.countIncorrect();

        sb.append("{");
        sb.append("\"wins\": " + wins + ", ");
        sb.append("\"losses\": " + losses + ", ");
        sb.append("\"correct\": " + correct + ", ");
        sb.append("\"incorrect\": " + incorrect);
        sb.append("}");

        return sb.toString();
    }

    @RequestMapping(value = "/newgame", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void createNewGame() {
        gameSessionManager.addGame();
    }

}
