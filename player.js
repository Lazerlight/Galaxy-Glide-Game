import { getProperty, incProperty, setProperty } from "./CustomFunctions.js";

const SPEED = 0.1;
const playerEl = document.querySelector(".humanoid");
const PLAYER_VELOCITY = {
  x: 0,
};

window.addEventListener("keydown", (e) => {
  // Checking if certain key is pressed and changes the direction of movement if the statement is correct
  if (e.key == "ArrowRight") {
    PLAYER_VELOCITY.x = 1;
  } else if (e.key == "ArrowLeft") {
    PLAYER_VELOCITY.x = -1;
  }
});

window.addEventListener("keyup", function () {
  // Checking if the key is no longer held down and stops the direction of movement
  PLAYER_VELOCITY.x = 0;
});

export function movement(delta) {
  // A function that handles the range of motion and velocity of the main player element
  incProperty(playerEl, "--left", SPEED * delta * PLAYER_VELOCITY.x);
  if (getProperty(playerEl, "--left") <= 5) {
    setProperty(playerEl, "--left", 5);
  } else if (getProperty(playerEl, "--left") >= 95) {
    setProperty(playerEl, "--left", 95);
  }
}