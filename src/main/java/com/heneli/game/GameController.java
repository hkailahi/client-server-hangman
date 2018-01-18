package com.heneli.game;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class GameController {

    GameSessionManager gameSessionManager = new GameSessionManager();

    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public String getWord() {
//        Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
        Gson gson = new Gson();
        return gson.toJson(gameSessionManager.getCurrentGame().getWord());
    }

    @RequestMapping(value = "/newgame", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void getNewGame() {
        gameSessionManager.addGame();
    }

    @PutMapping("/game")
    public ResponseEntity putLetter(@RequestBody Map<String, Character> map) {
        gameSessionManager.getCurrentGame().guessChar(map.get("letter"));

        if (gameSessionManager.getCurrentGame().isWon() || gameSessionManager.getCurrentGame().isLost()) {
            System.out.println("Game over");
        }

        String json = new Gson().toJson(gameSessionManager.getCurrentGame().getWord());

        return new ResponseEntity(json, HttpStatus.OK);
    }

}
