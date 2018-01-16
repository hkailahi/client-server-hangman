# Hangman

(WIP)

Let's play Hangman!

Client: React (ES6)

Server: Spring Boot (Java)
 
# Table of Contents

- [Configuration](https://gitlab.com/hkailahi/client-server-hangman#configuration)
- [Demo](https://gitlab.com/hkailahi/client-server-hangman#demo)
- [Game Rules](https://gitlab.com/hkailahi/client-server-hangman#game-rules)
- [Implementation Details](https://gitlab.com/hkailahi/client-server-hangman#implementation-details)
    - [Server](https://gitlab.com/hkailahi/client-server-hangman#server)
        - [Overview](https://gitlab.com/hkailahi/client-server-hangman#overview)
        - [Datatypes](https://gitlab.com/hkailahi/client-server-hangman#datatypes)
        - [API](https://gitlab.com/hkailahi/client-server-hangman#api)
        - [Game Logic](https://gitlab.com/hkailahi/client-server-hangman#game-logic)
    - [Client](https://gitlab.com/hkailahi/client-server-hangman#client)
        - [Components](https://gitlab.com/hkailahi/client-server-hangman#components)
        
# Configuration

Node and npm are installed locally (for now).

# Demo
# Game Rules
# Implementation Details

## Server

### Overview

Words are parsed from the words_alpha.txt and put into a HashTable.

A random word is chosen from this HashTable every time a a new game is started.

The word itself is available via the API, rather a list of Guessable (link to server/datatypes/guessable) containers is sent. This list is the size of the words length.

Conditions:

- Business logic executed on server
- Lose if 10 incorrect guesses have been made
- Allow for basic stat-keeping (wins/losses)

### Datatypes

There are a few important datatypes.

A Word contains:
- String: Content
- Set: Unique characters
- List: Guessables 

A Guessable is a container holding: 
- a character
- an index
- status on whether it has been asked

### API

```
GET /game
PUT /game { "letter": "b" }
GET /newgame
```

A Word is serialized as JSON and sent via the "/game" API. The JSON object sent omits content, unique characters, and each Guessable's character.

Ex.

Word as JSON w/o omissions
```JSON
{
    "content": "brewst",
    "uniqueChars": [
        "b",
        "r",
        "s",
        "t",
        "e",
        "w"
    ],
    "guesses": [
        {
            "answer": "b",
            "isGuessed": false,
            "index": 0
        },
        ...
        {
            "answer": "t",
            "isGuessed": false,
            "index": 5
        }
    ]
}
```


Word as JSON
```JSON
{
    "guesses": [
        {
            "isGuessed": false,
            "index": 0
        },
        ...
        {
            "isGuessed": false,
            "index": 5
        }
    ]
}
```


### Game Logic

All game logic is executed through the server. 

As a player can only make forward steps towards completion of the game, all that's needed GETs on the current game state and PUTs for selection of a letter.

## Client

### Overview

Component Tree:

```HTML
<App>
    <Layout>
        <Hangman />
        <Word />
        <Options />
        <Stats />
    </Layout>
</App>
```

### Components

WordBuilder

OptionsBuilder

Stats