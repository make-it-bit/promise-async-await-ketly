// task 2: create a guessing game!

// user story: user can enter a number.
// user story: the system pick a random number from 1 to 6.
// user story: if user number is equal to a random number, give user 2 points.
// user story: if the user number is different from the random number by 1, give the user 1 point, otherwise, give the user 0 points.
// user story: user can decide to play the game as long as they want to.

const game = () => {
  return new Promise((resolve, reject) => {
    const user_number = Number(
      window.prompt("Welcome to the guessing game! Enter a number (1-6): ")
    );
    const random_number = Math.floor(Math.random() * 6 + 1);

    if (isNaN(user_number) || !user_number) {
      reject(new Error("Wrong input type or there was no input!"));
    } else {
      if (user_number === random_number) {
        resolve({
          points: 2,
          random_number,
        });
      } else if (
        user_number + 1 === random_number ||
        user_number - 1 === random_number
      ) {
        resolve({
          points: 1,
          random_number,
        });
      } else {
        resolve({
          points: 0,
          random_number,
        });
      }
    }
  });
};

const continue_game = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue with the game?")) {
      resolve(true);
    } else {
      console.log("false");
      resolve(false);
    }
  });
};

/*const guess_handle = () => {
  game()
    .then((result) => {
      alert(
        `Randomly generated number was ${result.random_number}. You got ${result.points} points!`
      );
      continue_game().then((result) => {
        if (result) {
          guess_handle();
        } else {
          alert("The game has ended!");
        }
      });
    })
    .catch((error) => {
      alert(error);
    });
};

const start = () => {
  guess_handle();
};

start();*/

const guess_handle = async () => {
  try {
    const result = await game();
    alert(
      `Randomly generated number was ${result.random_number}. You got ${result.points} points!`
    );
    const is_continuing = await continue_game();
    if (is_continuing) {
      guess_handle();
    } else {
      alert("The game has ended!");
    }
  } catch (error) {
    alert(error);
  }
};

guess_handle();
