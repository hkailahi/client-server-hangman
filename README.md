# Hangman

Let's play Hangman!

Client: React (ES6)

Server: Spring Boot (Java)

# Configuration

## Quick Start

 - You will need Java, Maven, and NPM to build and run this project. 
     - Maven is a Java build/package manager that will use the pom.xml file.
     - NPM is a Java build/package manager that will use the package.json and package-lock.json files.
 - Run the following in one terminal. Keep it active.

```bash
    $ mvn clean package
    $ java -jar target/hangman-app-0.0.1-SNAPSHOT.jar
``` 
- Run the following in a new terminal. Keep it active.

```bash
    $ npm start
``` 
    

## Step By Step

- Install JDK and make sure your JAVA_HOME environment variable is set.
    - Check with echo
        
        ```bash
        $ echo $JAVA_HOME
        /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home
        ```
    - On a Mac, you can set JAVA_HOME in the .bash_profile in your home directory.
      
      ```bash
        $ emacs .bash_profile

        export JAVA_HOME=$(/usr/libexec/java_home)

        $ source .bash_profile

        $ echo $JAVA_HOME
        /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home
      ```
- Configure maven (Java build tool / package manager)
    - Install from https://maven.apache.org/download.cgi and follow installation instructions from https://maven.apache.org/install.html .
        - On Mac, the step "Add the bin directory of the created directory apache-maven-3.5.2 to the PATH environment variable" can be done by adding the following to your .bash_profile    
        
        ```bash
        export PATH=$PATH:/opt/apache-maven-3.5.2/bin:$PATH
        ```
- Setup Node/NPM (Javascript build tool / package manager)
    - Install Node and NPM. Luckily, NPM comes with node.
        - Download from https://nodejs.org/en/ .
- Run maven clean package to project directory  
 
      ```bash
        $ mvn clean package
      ```
      
    - This will build and install the libraries + dependencies for BOTH the frontend and the backend
    - NOTE: It may take a while the first time
- Start the server
    - In separate terminal, run the following and keep active until finished playing the game.
        -  You can quit by entering Control-C.
   
    ```bash
    $ java -jar target/hangman-app-0.0.1-SNAPSHOT.jar
    ```
    - This will launch the web server (Tomcat).
- Start the client
    - In separate terminal, run the following and keep active until finished playing the game.
        -  You can quit by entering Control-C
   
    ```
      $ npm start
    ```
    - This will start the React client and open your browser to localhost:3000
- Play Hangman
