# **Rock, Paper, Scissors, Lizard, Spock - Game**

## **Game Intro**

A simple Rock, Paper, Scissors, Lizard, Spock game that is meant to entertain people of all ages. Playable against the computer, and reminds the user about CD/DVD disks for some reason. :)

**The game website is live on Github Pages [Linked Here](https://tiyko.github.io/RPSLS-Game/)**

![Am I responsive screenshot](docs/screenshots/responsiveness-screenshot.jpg)

## **Index**

## **UX Design**

* *The UXD was made taking into consideration "The Five plans"*

### **Using The Strategy and the Scope Plane**

#### **Target audience**

* People of all ages who like to play computer games.

### **Using The Structure Plane**

#### **User Stories**

* As a user, I want the game information to be easily accessed.
* As a user, I want the game to be easy to navigate.
* As a user, I want the game to be intuitive.
* As a user, I want the game to have clear rules.
* As a user, I want the game to be entertaining.

#### **Website Goals**

* The site’s users want to play an online game that is fun and easy to use based on project Idea 1, Rock, Paper, Scissors, Lizard, Spock.
* The site’s users want to play an online game that has elements of chance to entertain users.
* The site’s users want to play an online game that has a limited number of tries before the game is over.
* The site’s users want to play an online game that has a score tracking system.
* The site’s users want to play an online game against the computer.

## **UI Design**

* *Taking into consideration the "Five Planes" I have used the "Skeleton Plane" and the "Surface Plane" to make the UI design.**

### **Wireframes**

To follow a pattern and make my life easier before I engaged in creating the website, first I drew wireframes using [diagrams.net](https://app.diagrams.net/).

* Desktop wireframes:

![Desktop diagram](docs/wireframes/desktop-wireframes.jpg)

* Mobile wireframes:

![Mobile diagram](docs/wireframes/mobile-wireframes.jpg)

### **Features**

#### **How to play**

* There are 5 characters of choice: Rock, Paper, Scissors, Lizard, Spock.
* Each of them defeats 2 characters and lose to the other 2:
  * Rock defeats Scissors and Lizard.
  * Paper defeats Rock and Spock.
  * Scissors defeats Paper and Lizard.
  * Lizard defeats Paper and Spock.
  * Spock defeats Rock and Scissors.

#### **Game matrix**

* Using JavaScript and this matrix I was able to create the game outcome on who will win, lose, and when it's a tie.

![Game Matrix](docs/screenshots/game_matrix.jpg)

#### **Colors**

* Designed to look like a CD/DVD on a table.
* The choice of gradient colors was picked using [this website](https://www.eggradients.com/).
* The gradient background colors of the website increase in contrast on the right side of the screen expressing as if the light is coming from the left side of the screen.

#### **Title**

* Since only the game is displayed on the entire page, the game title is large on the middle top of the screen.
![Page Title](docs/screenshots/title_screenshot.jpg)

#### **Game container**

* The game container is the largest circle and contains the game's outcome elements.
* The game container has a shadow leaning to the right to give an illusion as if the light was coming from the left side of the screen.

![Game Container](docs/screenshots/game_container.jpg)

#### **Buttons**

* There are 5 buttons on the screen representing the user's choices.
* All of the 5 buttons have a background picture to show the user what character is used to play with.
* All of the 5 buttons have a name to let the user know the character's name.

![Rock](docs/screenshots/rock_button.jpg)
![Paper](docs/screenshots/paper_button.jpg)
![Scissors](docs/screenshots/scissors_button.jpg)
![Lizard](docs/screenshots/lizard_button.jpg)
![Spock](docs/screenshots/spock_button.jpg)

#### **Game information container**

**Inside this container all the outcomes of the game are displayed:**

![Information Container](docs/screenshots/information_container.jpg)

* **Tooltip icon** ![Tooltip Icon](docs/screenshots/tooltip_icon.jpg) containing the game's rules:
  * When the user is mouse hovering over the information icon a pop-up with game rules will be displayed.
  * The game rules contain a picture showing the game outcome for every character.
  * The game will finish when the user or the computer reaches 10 wins and it can even end in a tie.

* **Call to action** ![Call to action](docs/screenshots/call_to_action.jpg) paragraph asking the user to take action and press the buttons to play the game.

* **Challengers containers: ![Challengers container](docs/screenshots/challengers.jpg)**
  * The title of the challengers ![Challengers title](docs/screenshots/challengers_title.jpg)
  * First, the challengers' area appears with 3 dots versus 3 dots.
  * As the user is clicking buttons and playing the game the name of the chosen characters will be displayed.
  * Every character appears with a background color matching their button color. ![Challengers Playing](docs/screenshots/challengers_playing.jpg)
  * The outcome of the challenge is displayed between the characters' names in green for the user, red for the computer, and pale brown for a tie.

* **Scoring system:** ![Scoring](docs/screenshots/scoring.jpg)
  * Under the challengers containers the scoring system, is presented, displaying the number of wins for the user and computer and as well the number of ties.
  * The scoring number background colors match the game's outcome in green for the user, red for the computer, and pale brown for a tie. ![Win](docs/screenshots/won.jpg)![Tie](docs/screenshots/tie.jpg)![Loss](docs/screenshots/lost.jpg)

#### **Gameover container**

* When any User wins, COM wins or Ties reach 10 that game will restart counting to 0 and another container will be displayed:
  * Informing the user if they win, lose, or ended in a tie.
  * Also a button is shown to let the user play the game again.

![Gameover container](docs/screenshots/gameover_container.jpg)
