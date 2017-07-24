# Project Title

Score Keeper App

## Project Description

This is a simple app that keeps the score of two players. The winning score can be established at the beginning, and the players play until that score is reached.

### Things to know

Most of the elements on the page are selected and stored as variables at the top of the script.js file. The p1Score and p2Score are equal to 0 on page load. The limitChoice variable is set to 5 initially.

The reset function sets p1Score and p2Score to 0, sets the textContent of p1Count and p2Count to 0, and sets their color to black.

The p1Button and p2Button each have an event listener. When the p1Button is clicked, if both p1Score and p2Score are less than limitChoice, p1Score increases by 1, the textContent of p1Count is updated, and if p1Score now equals limitChoice, the color of p1Count turns green. The inverse happens for the p2Button's event listener.

The limitChoice has an event listener as well. If the value of the winning score input changes, the HTML of countLimit is updated, and the reset function is run, setting both players' scores to 0.

If the reset button is clicked, the reset function is run, setting both players' scores to 0. 
