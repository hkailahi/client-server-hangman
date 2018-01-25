package com.heneli.Game;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class GameController {

    @Autowired
    private static final GameSessionManager gameSessionManager = new GameSessionManager();

    public GameController() {}

    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public String getWord() {
        return new Gson().toJson(gameSessionManager.getCurrGame().getWord());
    }

    @RequestMapping(value = "/game", method = RequestMethod.POST)
    public String postLetter(@RequestBody Map<String, Character> map) {
        gameSessionManager.getCurrGame().guessHandler(map.get("letter"));
        StringBuilder sb = new StringBuilder(new Gson().toJson(gameSessionManager.getCurrGame().getWord()));

        if (gameSessionManager.getCurrGame().isLost()) {
            int last = sb.lastIndexOf("}");
            if (last >= 0) { sb.delete(last, sb.length()); }

            sb.append(", \"word\": \"" + gameSessionManager.getCurrGame().getWord().getContent() + "\"");
            sb.append("}");
        }

        return sb.toString();
    }

    @RequestMapping(value = "/game/status", method = RequestMethod.GET)
    public String getGameStatus() {
        StringBuilder sb = new StringBuilder();

        sb.append("{\"status\": \"");
        if (gameSessionManager.getCurrGame().isWon()) { sb.append("won"); }
        else if (gameSessionManager.getCurrGame().isLost()) { sb.append("lost"); }
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

        sb.append("{");
        sb.append("\"wins\": " + wins + ", ");
        sb.append("\"losses\": " + losses);
        sb.append("}");

        return sb.toString();
    }

    @RequestMapping(value = "/newgame", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void createNewGame() {
        gameSessionManager.addGame();
    }
}
