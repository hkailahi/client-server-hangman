package com.heneli.game;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
public class GameController {

    GameSessionManager gameSessionManager = new GameSessionManager();
    AtomicInteger gamesPlayed = new AtomicInteger(0);

    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public String getWord() {
        Gson gson = new Gson();
        return gson.toJson(gameSessionManager.getCurrentGame().getWord());
    }

    @PostMapping("/game")
    public ResponseEntity putLetter(@RequestBody Map<String, Character> map) {
        gameSessionManager.getCurrentGame().guessChar(map.get("letter"));

        String json = new Gson().toJson(gameSessionManager.getCurrentGame().getWord());

        return new ResponseEntity(json, HttpStatus.OK);
    }

    @RequestMapping(value = "/game/status", method = RequestMethod.GET)
    public String getGameStatus() {
        StringBuilder sb = new StringBuilder();

        sb.append("{\"status\": \"");

        if (gameSessionManager.getCurrentGame().isWon()) {
            sb.append("won");
            gamesPlayed.getAndIncrement();
        }
        else if (gameSessionManager.getCurrentGame().isLost()) {
            sb.append("lost");
            gamesPlayed.getAndIncrement();
        }
        else
            sb.append("in-progress");

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

    @RequestMapping(value = "/newgame", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void getNewGame() {
        gameSessionManager.addGame();
    }

}
